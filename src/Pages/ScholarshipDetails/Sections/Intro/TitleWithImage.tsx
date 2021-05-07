import { Text } from "Elements";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  title?: string;
  image?: string;
};

const TitleWithImage: FC<Props> = ({ title, image }) => {
  return (
    <Title as="h1" image={image}>
      {title}
    </Title>
  );
};

export default TitleWithImage;

const Title = styled(Text)<{ image?: string }>`
  font-size: 48px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors['primary']};
  position: relative;

  &::before {
    content: '';
    background-image: url(${({ image }) => image});
    position: absolute;
    top: -25px;
    right: 20px;
    width: 160px;
    height: 160px;
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(15deg);
    opacity: .2;
  }
`;
