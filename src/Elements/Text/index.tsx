import styled from "styled-components";
import { ThemeColorKeys } from 'Theme';

type TextProps = {
  color?: ThemeColorKeys | string;
  weight?: string;
  size?: number;
  mb?: number;
  mt?: number;
  mx?: number;
};

export const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => color ? theme.colors[color] || theme.colors['text'] : theme.colors['text']};
  font-size: ${({ size }) => size ? `${size}px` : ''};
  font-weight: ${({ weight }) => weight || ''};
  margin-bottom: ${({ mb }) => mb ? `${mb}px` : 0};
  margin-top: ${({ mt }) => mt ? `${mt}px` : 0};
  margin-left: ${({ mx }) => mx ? `${mx}px` : 0};
  margin-right: ${({ mx }) => mx ? `${mx}px` : 0};
`;

export default Text;
