import { Accordion, Text } from "Elements";
import { FC } from "react";
import { Box, Flex } from "reflexbox";
import styled from "styled-components";
import { FaqItem } from "Types";

type Props = {
  questions?: FaqItem[],
};

const Questions: FC<Props> = ({ questions }) => {
  return (
    <QuestionsListWrapper>
      {questions?.map((qs, index) => {
        return (
          <QuestionWrapper key={`faq-question-${index}`}>
            <Flex py="32px" flexWrap="wrap">
              <Box width={[0, 0, 1 / 3]} display={['none', 'none', 'block']}>
                <Text
                  color="primary"
                  size={22}
                  weight="500"
                >{qs.type}</Text>
              </Box>
              <Box width={[1, 1, 2 / 3]}>
                <Accordion
                  label={qs.question}
                  texts={qs.answer.map(an => an.data)}
                  labelProps={{
                    size: 22,
                    weight: '500',
                    lineHeight: 32,
                  }}
                  textProps={{
                    size: 22,
                    weight: '300',
                    lineHeight: 32,
                    mb: 24,
                  }}
                />
              </Box>
            </Flex>
          </QuestionWrapper>
        )
      })}
    </QuestionsListWrapper>
  );
};

export default Questions;

const QuestionsListWrapper = styled.div``;

const QuestionWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;
