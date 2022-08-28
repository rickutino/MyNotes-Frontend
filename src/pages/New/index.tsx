import { Link } from "react-router-dom";
import { Button } from "../../components/Button/input";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">back</Link>
          </header>

          <Input placeholder="Title" />
          <Textarea placeholder="Observations" />

          <Section title="Useful links">
            <NoteItem value={"https://rocketseat.com.br"} />
            <NoteItem isNew placeholder="New link" />
          </Section>

          <Section title="Markers">
            <div className="tags">
              <NoteItem value={"React"} />
              <NoteItem value={"Node"} />
              <NoteItem value={"Ret"} />
              <NoteItem value={"babd"} />
              <NoteItem isNew placeholder="New tag" />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}