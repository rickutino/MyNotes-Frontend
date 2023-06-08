import { BackgroundIMG, Container, Form } from "./styles";

import { Button } from "../../components/Button/input";
import { Input } from "../../components/Input";

import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hook/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>My Notes</h1>
        <p>Application to save and manage your useful links</p>

        <h2>Please Login here.</h2>

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title={"Login now!"} onClick={handleSignIn} />
      
        <Link to="/register">Create account</Link>
      </Form>

      <BackgroundIMG />
    </Container>
  )
}