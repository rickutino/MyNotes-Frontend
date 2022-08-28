import styled from "styled-components";
import theme from "../../styles/theme";

export type ThemeTypeProps = {
  theme: typeof theme;
  isNew: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }: ThemeTypeProps) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }: ThemeTypeProps) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  .button-delete {
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.ORANGE};
  }

  > button {
    background: none;
    border: none;

    display: flex;
    align-items: center;
  }

  > input {
    height: 48px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }: ThemeTypeProps) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }: ThemeTypeProps) => theme.COLORS.GRAY_300};
    }
  }
`;