import { Tag } from "../Tag";
import { Container } from "./styles";

interface Tag {
  id: string;
  name: string;
}

interface INoteProps {
  data: {
    title: string;
    tags: Tag[];
  },
  onClick: () => void;
}

export function Note({ data, ...rest }: INoteProps) {
  const { title, tags } = data;
  console.log(tags)

  return (
    <Container {...rest} >
      <>
        <h1>{title}</h1>

        { tags && 
          <footer>
            {tags.map( tag => <Tag key={tag.id} title={tag.name} />)}
          </footer>
        }
      </>
    </Container>
  )
}