import { ReactNode } from "react";
import { Container } from "./styles";

interface ISectionProps {
  title: string;
  children: ReactNode;
}
export function Section({ title, children }: ISectionProps) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}