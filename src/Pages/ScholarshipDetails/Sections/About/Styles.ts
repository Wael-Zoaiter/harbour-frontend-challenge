import { Image } from "Elements";
import styled from "styled-components";

export const AboutWrapper = styled.section``;

export const ProgramImageWrapper = styled.div`
  position: relative;

  &::before {
    content: '';
    background-image: url('/images/about-image.svg');
    background-repeat: no-repeat;
    background-size: contain;
    height: 470px;
    width: 470px;
    position: absolute;
    top: -30px;
    left: -30px;
    z-index: -1;
  }

  ${Image} {
    height: 410px;
    width: 410px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media ${({ theme }) => theme.media['mobile']} {
    &::before {
      height: 334px;
      width: 334px;
      top: -17px;
      left: 0;
    }

    ${Image} {
      height: 300px;
      width: 300px;
      margin: auto;
    }
  }
`;
