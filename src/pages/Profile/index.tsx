import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/input";
import { Input } from "../../components/Input";
import { Avatar, Container, Form } from "./styles";
import { useAuth } from "../../hook/auth";
import { useState } from "react";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [avatar, setAvatar] = useState(user?.avatar);
  const [avatarFile, setAvatarFile] = useState(null);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [actualPassword, setActualPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      oldPassword: actualPassword
    }

    console.log("hansleUpdate ", user)
    updateProfile({ user, avatarFile })
  }

  async function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/"><FiArrowLeft /></Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="User image" />

          <label htmlFor="avatar">
            <FiCamera size={20}/>

            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>

        <Input 
          placeholder="Name"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Actual password"
          type="password"
          icon={FiLock}
          onChange={e => setActualPassword(e.target.value)}
        />

        <Input 
          placeholder="New password"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title={"Save"} onClick={handleUpdate} />
      </Form>
    </Container>
  )
}