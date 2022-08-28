import { BackgroundIMG, Container, Form } from "./styles";

import { Button } from "../../components/Button/input";
import { Input } from "../../components/Input";

import { FiLock, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignIn() {
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
        />

        <Input 
          placeholder="Password"
          type="password"
          icon={FiLock}
        />

        <Button title={"Login now!"} />
      
        <Link to="/register">Create account</Link>
      </Form>

      <BackgroundIMG />
    </Container>
  )
}