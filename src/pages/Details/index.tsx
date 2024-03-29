import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button/input";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Container, Content, Links } from "./styles";
import { api } from "../../services/api";

interface ILinks {
  id: string;
  url: string;
}

interface ITags {
  id: string;
  name: string;
  note_id: string;
  user_id: string;
}

interface IDataDTO {
  title: string;
  description: string;
  tags: ITags[];
  links: ILinks[];
}

export function Details() {
  const [data, setData] = useState<IDataDTO>();
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("It's ok delete it?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  },[])
  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText title="Delete note" onClick={handleRemove} />
              <h1>{data.title}</h1>
              <p>{data.description}</p>
            {
              data.links &&
              <Section title="Useful links">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Useful links">
                {
                  data.tags.map(tag => (
                    <Tag key={String(tag.id)} title={tag.name}/>
                  ))
                }
              </Section>
            }
            <Button title="Back" onClick={handleBack} />
          </Content>
        </main>
      }
    </Container>
  )
}