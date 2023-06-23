import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";

import { FiPlus, FiSearch } from 'react-icons/fi';
import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface ITags {
  id: string;
  name: string;
  note_id: string;
  user_id: string;
}

export function Home() {
  const [tags, setTags] = useState<ITags[]>([]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);

  function handleTagSelected(tagName: string) {
    const alreadySelected = tagsSelected.includes(tagName);

    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      console.log(response.data)
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
        <Input placeholder="Search by title" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="My Notes">
          <Note data={{
            title:"React",
            tags: [
              { id: "1", title: "React"},
              { id: "2", title: "Javascript"},
              { id: "3", title: "Typescript"},
            ]
          }}/>
        </Section>
      </Content>
      
      <NewNote to="/new">
        <FiPlus />
        Create Notes
      </NewNote>
    </Container>
  )
}