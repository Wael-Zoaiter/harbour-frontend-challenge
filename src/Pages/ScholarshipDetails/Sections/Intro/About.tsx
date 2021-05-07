import { Text, Button } from "Elements";
import { FC } from "react";
import styled from "styled-components";
import { Block } from "Types";

type Props = {
  summary?: string;
  description?: Block[];
  position?: string;
};

const About: FC<Props> = ({ summary, description, position }) => {
  return (
    <Wrapper>
      <Strong>{summary}</Strong>
      {description?.map(text => (
        <Paragraph key={text.data}>{text.data}</Paragraph>
      ))}
      <Paragraph>
        <Strong as="span">Position:</Strong>
        {position}
      </Paragraph>
      <ApplyButton>Apply Now</ApplyButton>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  span {
    margin-right: 6px;
  }
`;

const Paragraph = styled(Text)`
  font-weight: 300;
  font-size: 22px;
  margin-bottom: 40px;
  line-height: 32px;
`;

const Strong = styled(Paragraph)`
  font-weight: 500;
`;

const ApplyButton = styled(Button)`
  padding: 16px 40px;
  border-radius: 29px;
  background-color: ${({ theme }) => theme.colors['primary']};
  color: ${({ theme }) => theme.colors['white']};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 8px;
`;
