import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;