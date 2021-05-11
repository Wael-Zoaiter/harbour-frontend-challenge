import { FC } from 'react';
import { Box, Flex } from 'reflexbox';
import { Scholarship } from 'Types';
import Price from './Price';
import { DetailsWrapper } from './Styles';
import Time from './Time';

const DetailsSection: FC<{ scholarship?: Scholarship }> = ({ scholarship }) => {
  return (
    <DetailsWrapper>
      <Flex px={['180px']} py={['200px']} flexWrap="wrap">
        <Box width={[1, 1, 1 / 3]} px="20px">
          <Price
            totalValue={scholarship?.total_value}
            remaining={scholarship?.remaining}
            tuition={scholarship?.tuition}
            stipendPerMonth={scholarship?.stipend_per_month}
            stipendPerYear={scholarship?.stipend_per_year}
            currency="€"
          />
        </Box>
        <Box width={[1, 1, 2 / 3]}>
          <Time
            studyHours={scholarship?.study_commitment}
            studyDescription={scholarship?.study_commitment_text}
            workHours={scholarship?.work_commitment}
            workDescription={scholarship?.internship_commitment_text}
            duration={scholarship?.duration}
            type={scholarship?.work_commitment_type}
            typeDescription={scholarship?.internship_commitment_text}
          />
        </Box>
      </Flex>
    </DetailsWrapper>
  );
};

export default DetailsSection;
