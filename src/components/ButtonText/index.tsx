import { Container } from "./styles";

interface IButtonTextProps {
  title: string;
  isActive?: boolean;
}

export function ButtonText({ title, isActive = false, ...rest }: IButtonTextProps) {
  console.log(isActive, {...rest})
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}