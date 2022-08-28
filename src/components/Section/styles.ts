import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.div`
  margin: 28px 0;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 28px;

    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }

  > button {
    padding: 16px 22px;
  }
`;