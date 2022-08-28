import { BackgroundIMG, Container, Form } from "./styles";

import { Button } from "../../components/Button/input";
import { Input } from "../../components/Input";

import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp() {
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
        />

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

        <Button title={"Register"} />
      
        <Link to="/">Login</Link>
      </Form>
    </Container>
  )
}