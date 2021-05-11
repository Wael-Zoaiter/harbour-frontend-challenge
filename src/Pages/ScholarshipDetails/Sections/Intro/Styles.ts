import styled from "styled-components";

export const IntroWrapper = styled.section`
  position: relative;

  &::before {
    content: '';
    background-image: url('/images/intro.svg');
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 560px;
    height: 257px;
    z-index: -1;
  }

  @media ${({ theme }) => theme.media['mobile']} {
    &::before {
      display: none;
    }
  }
`;
