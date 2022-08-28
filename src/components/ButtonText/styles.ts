import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme,
  isActive: boolean;
}

export const Container = styled.button`
  font-size: 16px;
  border: none;
  
  background: none;
  color: ${({ theme, isActive }: ThemeTypeProps) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`;