import { Container } from "./styles";

interface IButtonProps {
  title: string;
  loading?: boolean;
  onClick?: () => void;
}

export function Button({ title, loading = false,  ...rest }: IButtonProps ) {
  return (
    <Container 
      disabled={loading}
      type="button"
      {...rest}
    >
      { loading ? "Loading..." : title}
    </Container>
  )
}
