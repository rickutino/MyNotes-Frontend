import { Container } from "./styles";

interface IButtonTextProps {
  title: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function ButtonText({ title, isActive = false, ...rest }: IButtonTextProps) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {title}
    </Container>
  );
}