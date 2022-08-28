import styled from "styled-components";
import theme from "../../styles/theme";
import SignInBackgroundIMG from "../../assets/SignInBackgroundIMG.svg"; 

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px auto 40px;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 124px;
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.ORANGE};
  }
`;

export const BackgroundIMG = styled.div`
  flex: 1;
  background: url(${SignInBackgroundIMG}) no-repeat center center;
  background-size: cover;
`;