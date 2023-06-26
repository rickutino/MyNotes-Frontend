import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";

import { FiPlus, FiSearch } from 'react-icons/fi';
import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface ITags {
  id: string;
  name: string;
  note_id: string;
  user_id: string;
}

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState<ITags[]>([]);
  const [notes, setNotes] = useState<any[]>([]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);
  
  const navigate = useNavigate();

  function handleTagSelected(tagName: string) {
    if(tagName === "All tags") {
      return setTagsSelected([]);
    }

    const alreadySelected = tagsSelected.includes(tagName);

    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  async function handleDetails(id: string) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      console.log(response.data)
      setNotes(response.data);
    }

    fetchNotes();
  },[tagsSelected, search]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      
      setTags(response.data);
    }

    fetchTags();
  },[]);

  return (
    <Container>
      <Brand>
        <h1>My notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="All Tags"
            onClick={() => handleTagSelected("All tags")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={tag.id}>
              <ButtonText 
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder="Search by title"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}  
        />
      </Search>

      <Content>
        <Section title="My Notes">
          {
            notes.map(note => (
              <Note 
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(String(note.id))}
              />
            ))
          }
        </Section>
      </Content>
      
      <NewNote to="/new">
        <FiPlus />
        Create Notes
      </NewNote>
    </Container>
  )
}