import { BackgroundIMG, Container, Form } from "./styles";

import { Button } from "../../components/Button/input";
import { Input } from "../../components/Input";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Fill in all fields!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Successfully registered user!")
        navigate("/");
      })
      .catch((error: { response: { data: { message: string; }; }; }) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Unable to register")
        }
      })
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