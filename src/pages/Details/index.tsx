import { Button } from "../../components/Button/input";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Container, Content, Links } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Delete note" />
            <h1>Introduction to React</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quidem a officia omnis! Quod, nobis praesentium quibusdam quam blanditiis quas!</p>
          <Section title="Useful links">
            <Links>
              <li><a href="https://rocketseat.com.br">https://rocketseat.com.br</a></li>
              <li><a href="https://rocketseat.com.br">https://rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Useful links">
            <Tag title="Nodejs"/>
            <Tag title="Express"/>
          </Section>
          <Button title="MyButton" loading/>
          <Button title="Back" />
          <Button title="Home" />
        </Content>
      </main>
    </Container>
  )
}