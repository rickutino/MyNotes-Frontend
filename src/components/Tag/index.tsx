import { Container } from "./styles";

interface ITagProps {
  title: string;
}

export function Tag({title, ...rest}: ITagProps) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}