import { Text, Image } from "Elements";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  organization?: string;
  logo?: string;
};

const PowerBy: FC<Props> = ({ organization, logo }) => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <InfoWrapper>
        <Label>Power By:</Label>
        <Title>{organization}</Title>
      </InfoWrapper>
    </Wrapper>
  );
};

export default PowerBy;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Image)`
  height: 80px;
  width: 80px;
  object-fit: contain;
`;

const InfoWrapper = styled.div`
  margin-left: 40px;
`;

const Label = styled(Text)`
  font-weight: 300;
  font-size: 18px;
  color: ${({ theme }) => theme.colors['gray']};
  margin-bottom: 10px;
`;

const Title = styled(Text)`
  font-weight: 300;
  font-size: 27px;
`;
