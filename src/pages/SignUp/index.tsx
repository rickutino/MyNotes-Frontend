import { BackgroundIMG, Container, Form } from "./styles";

import { Button } from "../../components/Button/input";
import { Input } from "../../components/Input";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!")
    }
  }

  return (
    <Container>
      <BackgroundIMG />

      <Form>
        <h1>My Notes</h1>
        <p>Application to save and manage your useful links</p>

        <h2>Create your account here.</h2>

        <Input 
          placeholder="Name"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

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

        <Button title={"Register"} onClick={handleSignUp}/>
      
        <Link to="/">Login</Link>
      </Form>
    </Container>
  )
}