import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme
}

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }:ThemeTypeProps) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    > a svg {
      color: ${({ theme }:ThemeTypeProps) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }

`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 16px;
  }

  > button {
    font-size: 18px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -125px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    border-radius: 50%;
    background-color: ${({ theme }: ThemeTypeProps) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    > input {
      display: none;
    }

    > svg {
      color: ${({ theme }: ThemeTypeProps) => theme.COLORS.BACKGROUND_800};
    }
  }
`;