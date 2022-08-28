import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";

import { FiPlus, FiSearch } from 'react-icons/fi';
import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>My notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="All Tags" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
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