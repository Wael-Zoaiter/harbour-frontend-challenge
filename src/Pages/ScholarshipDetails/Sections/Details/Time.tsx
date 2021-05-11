import { BorderedBox, Divider, Text } from "Elements"
import { FC } from "react";
import { Box, Flex } from "reflexbox";
import { TitleWithLine } from "./Styles";

type Props = {
  studyHours?: number;
  studyDescription?: string;
  workHours?: number;
  workDescription?: string;
  duration?: number;
  type?: string;
  typeDescription?: string;
};

const Time: FC<Props> = (props) => {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 1 / 2]} px="20px">
        <BorderedBox p="32px 24px 16px" height="100%">
          <Text color="primary" mb={8} size={16} weight="500">Study commitment</Text>
          <Text size={26} color="dark" weight="300">{props.studyHours} hours / day</Text>
          <Divider mt={22} mb={16} width="28px" />
          <Text size={16} weight="300" lineHeight={24}>{props.studyDescription} hours / day</Text>
        </BorderedBox>
      </Box>
      <Box width={[1, 1 / 2]} px="20px">
        <BorderedBox p="32px 24px 16px" height="100%">
          <Text color="primary" mb={8} size={16} weight="500">Work commitment</Text>
          <Text size={26} color="dark" weight="300">{props.workHours} hours / day</Text>
          <Divider mt={22} mb={16} width="28px" />
          <Text size={16} weight="300" lineHeight={24}>{props.workDescription} hours / day</Text>
        </BorderedBox>
      </Box>
      <Box width={1} px="20px">
        <TitleWithLine>Duration</TitleWithLine>
        <BorderedBox p="32px 40px 16px">
          <Text color="primary" lineHeight={24} size={16} weight="500" mb={8}>A full-time contract</Text>
          <Text size={26} color="dark" weight="300">{props?.duration} Year / {props?.type}</Text>
          <Divider mt={22} mb={16} width="28px" />
          <Text size={16} weight="300" lineHeight={24}>{props?.typeDescription} hours / day</Text>
        </BorderedBox>
      </Box>
    </Flex>
  );
};

export default Time;
