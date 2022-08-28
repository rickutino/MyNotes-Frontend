import { TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface IInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  value?: string;
}

export function Textarea({ value, ...rest}: IInputProps) {
  return (
    <Container {...rest}>
      { value }
    </Container>
  )
}