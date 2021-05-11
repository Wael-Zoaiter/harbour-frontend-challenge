import { BorderedBox, Divider, Text } from "Elements"
import { FC } from "react";
import { Box, Flex } from "reflexbox";

type Props = {
  currency?: string;
  totalValue?: number;
  tuition?: number;
  remaining?: number;
  stipendPerYear?: number;
  stipendPerMonth?: number;
};

const Price: FC<Props> = (props) => {
  return (
    <BorderedBox p="32px 44px 30px" height="100%">
      <Text color="primary" mb={33} size={16} weight="500">Scholarship value</Text>
      <Text size={48} weight="300">{props.currency}{props.totalValue}</Text>
      <Divider mt={188} mb={61} mx="-17px" />
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} mb="23px">
          <Text color="primary" lineHeight={24} size={16} weight="500">Tuition covered</Text>
          <Text size={16} weight="300">{props.currency}{props.tuition}</Text>
        </Box>
        <Box width={[1, 1 / 2]} mb="23px" pl="30px">
          <Text color="primary" lineHeight={24} size={16} weight="500">Remaining</Text>
          <Text size={16} weight="300">{props.currency}{props.remaining}</Text>
        </Box>
        <Box width={[1]}>
          <Text color="primary" lineHeight={24} size={16} weight="500">Living stipend</Text>
          <Text size={16} weight="300">{props.currency}{props.stipendPerYear} ({props.currency}{props.stipendPerMonth}/month)</Text>
        </Box>
      </Flex>
    </BorderedBox>
  );
};

export default Price;
