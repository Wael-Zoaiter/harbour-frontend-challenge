import styled from "styled-components";
import { ThemeColorKeys } from 'Theme';

export type TextProps = {
  color?: ThemeColorKeys | string;
  weight?: string;
  size?: number;
  lineHeight?: number;
  mb?: number;
  mt?: number;
  mx?: number;
  ml?: number;
  mr?: number;
};

export const Text = styled.p<TextProps>`
  color: ${({ theme, color }) => color ? theme.colors[color] || theme.colors['text'] : theme.colors['text']};
  font-size: ${({ size }) => size ? `${size}px` : ''};
  font-weight: ${({ weight }) => weight || ''};
  line-height: ${({ lineHeight }) => lineHeight ? `${lineHeight}px` : ''};
  margin-bottom: ${({ mb }) => mb ? `${mb}px` : 0};
  margin-top: ${({ mt }) => mt ? `${mt}px` : 0};
  margin-left: ${({ mx, ml }) => mx ? `${mx}px` : ml ? `${ml}px` : 0};
  margin-right: ${({ mx, mr }) => mx ? `${mx}px` : mr ? `${mr}px` : 0};
`;

export default Text;
