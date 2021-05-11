import { Image, Text } from 'Elements';
import { FC } from 'react';
import { Box, Flex } from 'reflexbox';
import { Scholarship } from 'Types';
import { AboutWrapper, ProgramImageWrapper } from './Styles';

const AboutSection: FC<{ scholarship?: Scholarship }> = ({ scholarship }) => {
  return (
    <AboutWrapper>
      <Flex px={['200px']} pt={['200px']} flexWrap="wrap">
        <Box width={[1, 1, 1 / 3]}>
          <ProgramImageWrapper>
            <Image
              src={scholarship?.program.photos[0].src}
              alt={scholarship?.program.photos[0].title}
            />
          </ProgramImageWrapper>
        </Box>
        <Box width={[1, 1, 2 / 3]} pl={['120px']}>
          <Text
            color="primary"
            size={48}
            weight="500"
            mb={40}
          >About the apprenticeship</Text>
          {scholarship?.about.map(text => (
            <Text size={22} lineHeight={32} weight="300">{text.data}</Text>
          ))}
        </Box>
      </Flex>
    </AboutWrapper>
  );
};

export default AboutSection;
