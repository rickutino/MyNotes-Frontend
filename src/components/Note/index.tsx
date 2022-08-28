import { Tag } from "../Tag";
import { Container } from "./styles";

interface Tag {
  id: string;
  title: string;
}

interface INoteProps {
  data: {
    title: string;
    tags: Tag[];
  }
}

export function Note({ data, ...rest }: INoteProps) {
  const { title, tags } = data;

  return (
    <Container {...rest} >
      <>
        <h1>{title}</h1>

        { tags && 
          <footer>
            {tags.map( tag => <Tag key={tag.id} title={tag.title} />)}
          </footer>
        }
      </>
    </Container>
  )
}