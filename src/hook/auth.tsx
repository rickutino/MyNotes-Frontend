import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../services/api";

interface ISignIn {
  email: string;
  password: string;
}

interface IAuthContext {
  signIn: ({ email, password }: ISignIn) => Promise<void>;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }: ISignIn){
    try{
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      console.log(user)
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
    } catch(error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Unable to sign in!")
      }
    }
  }

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
