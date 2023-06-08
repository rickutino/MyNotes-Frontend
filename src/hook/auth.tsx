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

interface IDataResponse {
  user: IUser;
  token: string;
}

interface IAuthContext {
  signIn: ({ email, password }: ISignIn) => Promise<void>;
  user: IUser;
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

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch(error: any) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Unable to sign in!")
      }
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("@mynotes:token");
    const user = localStorage.getItem("@mynotes:user");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
