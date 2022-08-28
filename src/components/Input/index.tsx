import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Container } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
  icon?: IconType;
}

export function Input({icon: Icon, ...rest}: IInputProps) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  )
}