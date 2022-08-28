import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    > div {
      width:49%;

      > input {
        padding: 12px 24px;
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 38px auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 36px auto 28px;

    h1 {
      font-size: 32px;
    }

    a {
      font-size: 20px;
      color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_100};
    }
  }
`;