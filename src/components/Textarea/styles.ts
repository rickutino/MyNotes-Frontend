import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }: ThemeTypeProps) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  &::placeholder {
  color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_300};
  }
`;