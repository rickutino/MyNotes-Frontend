import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface ISignIn {
  email: string;
  password: string;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface IUserProfile {
  user: IUser;
  avatarFile: string | null;
}

interface IDataResponse {
  user?: IUser;
  token?: string;
}

interface IAuthContext {
  signIn: ({ email, password }: ISignIn) => Promise<void>;
  user?: IUser;
  signOut: () => void;
  updateProfile: ({user, avatarFile}: IUserProfile) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<IDataResponse>({} as IDataResponse)

  async function signIn({ email, password }: ISignIn){
    try{
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@mynotes:user", JSON.stringify(user));
      localStorage.setItem("@mynotes:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
    } catch(error: any) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Unable to sign in!")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@mynotes:token");
    localStorage.removeItem("@mynotes:user");

    setData({});
  }

  async function updateProfile({user, avatarFile}: IUserProfile) {
    try {
      await api.put("/users", user);

      localStorage.setItem("@mynotes:user", JSON.stringify(user));
      setData({ user, token: data.token});
    } catch(error: any) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Unable to update profile!")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@mynotes:token");
    const user = localStorage.getItem("@mynotes:user");

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
