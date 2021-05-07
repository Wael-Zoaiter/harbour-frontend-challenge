import { FC } from 'react';
import { Box, Flex } from 'reflexbox';
import { ScholarshipPage } from 'Types';
import About from './About';
import CloseTimer from './CloseTimer';
import Details from './Details';
import PowerBy from './PowerBy';
import { IntroWrapper } from './Styles';
import TitleWithImage from './TitleWithImage';

const Intro: FC<{ data?: ScholarshipPage }> = ({ data }) => {
  return (
    <IntroWrapper>
      <Flex px={['120px']} pt={['200px']} flexWrap="wrap">
        <Box width={[1, 1, 1 / 2]} px={['80px']} mb={['48px']}>
          <TitleWithImage
            image={data?.scholarship.program.program_logo.src}
            title={data?.scholarship.name}
          />
        </Box>
        <Box width={[1, 1, 1 / 2]} px={['80px']} mb={['48px']}>
          <PowerBy
            organization={data?.scholarship.company.name}
            logo={data?.scholarship.company.color_logo.src}
          />
        </Box>
        <Box width={[1, 1, 1 / 2]} px={['80px']} mb={['48px']}>
          <About
            summary={data?.scholarship.program.about}
            description={data?.scholarship.description}
            position={data?.scholarship.program.name}
          />
        </Box>
        <Box width={[1, 1, 1 / 2]} px={['80px']}>
          <Flex flexWrap="wrap">
            <Box width={[1]} mb={['30px']}>
              <CloseTimer
                startDate={data?.scholarship.scholarship_start_date}
              />
            </Box>
            <Box width={[1]} mb={['48px']}>
              <Details
                location={data?.scholarship.location.name}
                duration={`${data?.scholarship.duration} Year`}
                type={data?.scholarship.work_commitment_type}
                startDate={data?.scholarship.scholarship_start_date}
                endDate={data?.scholarship.application_end_date}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </IntroWrapper>
  );
};

export default Intro;
