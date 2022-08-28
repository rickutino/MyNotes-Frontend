import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}


export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.ORANGE};
  color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BACKGROUND_800};

  font-size: 18px;
  height: 3.5rem;
  border: 0;
  padding: 0 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;