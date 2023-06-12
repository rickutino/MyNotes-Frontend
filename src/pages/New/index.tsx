import { Link } from "react-router-dom";
import { Button } from "../../components/Button/input";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";
import { useState } from "react";

export function New() {
  const [links, setLinks] = useState<String[]>([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

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
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={String(link)}
                  onClick={() => {}}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
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