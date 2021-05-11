import { Text } from "Elements";
import styled from "styled-components";

export const DetailsWrapper = styled.section``;

export const TitleWithLine = styled(Text).attrs({
  weight: '500',
  size: 16,
  lineHeight: 24,
  mt: 24,
  mb: 24,
})`
  position: relative;
  text-transform: uppercase;
  text-align: center;

  &::after, &::before {
    content: '';
    height: 1px;
    background-color: ${({ theme }) => theme.colors['lightGray']};
    width: calc(50% - 65px);
    position: absolute;
    top: 12px;
  }

  &::before {
    left: 0;
    right: auto;
  }

  &::after {
    left: auto;
    right: 0;
  }
`;
