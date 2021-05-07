import { BorderedBox, Text } from "Elements";
import { FC } from "react";
import { Box, Flex } from "reflexbox";

type Props = {
  location?: string;
  duration?: string;
  type?: string;
  startDate?: string;
  endDate?: string;
};

const Details: FC<Props> = (props) => {
  return (
    <BorderedBox p="40px">
      <Flex width="100%" flexWrap="wrap">
        <Box width={[1 / 2]} mb={3}>
          <Text color="primary" mb={3} size={16} weight="500">Location</Text>
          <Text size={15} weight="300">{props.location}</Text>
        </Box>
        <Box width={[1 / 2]} mb={3}>
          <Text color="primary" mb={3} size={16} weight="500">Duration</Text>
          <Text size={15} weight="300">{props.duration}</Text>
          <Text size={15} weight="300">{props.type}</Text>
        </Box>
        <Box width={[1 / 2]}>
          <Text color="primary" mb={3} size={16} weight="500">Start date</Text>
          <Text size={15} weight="300">{new Date(props.startDate || '').toLocaleDateString()}</Text>
        </Box>
        <Box width={[1 / 2]}>
          <Text color="primary" mb={3} size={16} weight="500">End date</Text>
          <Text size={15} weight="300">{new Date(props.endDate || '').toLocaleDateString()}</Text>
        </Box>
      </Flex>
    </BorderedBox>
  );
};

export default Details;
