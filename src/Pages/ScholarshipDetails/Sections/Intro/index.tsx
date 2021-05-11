import { FC } from 'react';
import { Box, Flex } from 'reflexbox';
import { Scholarship } from 'Types';
import About from './About';
import CloseTimer from './CloseTimer';
import Details from './Details';
import PowerBy from './PowerBy';
import TitleWithImage from './TitleWithImage';
import { IntroWrapper } from './Styles';

const IntroSection: FC<{ scholarship?: Scholarship }> = ({ scholarship }) => {
  return (
    <IntroWrapper>
      <Flex px={['20px', '20px', '120px']} pt={['200px']} flexWrap="wrap">
        <Box width={[1, 1, 1 / 2]} px={[0, 0, '80px']} mb={['48px']}>
          <TitleWithImage
            image={scholarship?.program.program_logo.src}
            title={scholarship?.name}
          />
        </Box>
        <Box width={[1, 1, 1 / 2]} px={[0, 0, '80px']} mb={['48px']}>
          <PowerBy
            organization={scholarship?.company.name}
            logo={scholarship?.company.color_logo.src}
          />
        </Box>
        <Box width={[1, 1, 1 / 2]} px={[0, 0, '80px']} mb={['48px']}>
          <About
            summary={scholarship?.program.about}
            description={scholarship?.description}
            position={scholarship?.program.name}
          />
        </Box>
        <Box width={[1, 1, 1 / 2]} px={[0, 0, '80px']}>
          <Flex flexWrap="wrap">
            <Box width={[1]} mb={['30px']}>
              <CloseTimer
                startDate={scholarship?.scholarship_start_date}
              />
            </Box>
            <Box width={[1]} mb={['48px']}>
              <Details
                location={scholarship?.location.name}
                duration={`${scholarship?.duration} Year`}
                type={scholarship?.work_commitment_type}
                startDate={scholarship?.scholarship_start_date}
                endDate={scholarship?.application_end_date}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </IntroWrapper>
  );
};

export default IntroSection;
