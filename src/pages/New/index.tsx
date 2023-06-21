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

  const [tags, setTags] = useState<String[]>([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted: string) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }
  
  function handleRemoveTag(deleted: string) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
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
                  onClick={() => handleRemoveLink(String(link))}
                />
              ))
            }
            <NoteItem
              isNew
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Markers">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={String(tag)}
                    onClick={() => handleRemoveTag(String(tag))}
                  />
                ))
              }
              <NoteItem 
                isNew
                placeholder="New tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}