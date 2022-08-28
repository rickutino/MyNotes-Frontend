import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}


export const Container = styled.header`
  grid-area: header;

  height: 105px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 5rem;
`;

export const Profile = styled(Link)`
  gap: 16px;
  display: flex;
  align-items: center;

  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 18px;

    span {
      font-size: 14px;
      color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }: ThemeTypeProps) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  
  font-size: 36px;
  color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_100};
`;