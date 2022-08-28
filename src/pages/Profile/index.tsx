import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/input";
import { Input } from "../../components/Input";
import { Avatar, Container, Form } from "./styles";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/"><FiArrowLeft /></Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/rickutino.png" alt="User image" />

          <label htmlFor="avatar">
            <FiCamera size={20}/>

            <input id="avatar" type="file"/>
          </label>
        </Avatar>

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
          placeholder="Actual password"
          type="password"
          icon={FiLock}
        />

        <Input 
          placeholder="New password"
          type="password"
          icon={FiLock}
        />

        <Button title={"Save"} />
      </Form>
    </Container>
  )
}