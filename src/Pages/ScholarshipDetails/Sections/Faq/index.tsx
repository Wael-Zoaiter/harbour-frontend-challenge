import { Divider, Dropdown, Text } from "Elements";
import { FC } from "react";
import { Box, Flex } from "reflexbox";
import { FAQ } from "Types";
import Questions from "./Questions";
import { FaqWrapper } from "./Styles"

const FaqSection: FC<{ faqs?: FAQ }> = ({ faqs }) => {
  return (
    <FaqWrapper>
      <Flex px={['200px']} pb={['200px']} flexWrap="wrap" alignItems="center">
        <Box width={[1, 1 / 2]}>
          <Text
            color="primary"
            size={48}
            weight="500"
          >Frequently asked questions</Text>
        </Box>
        <Box width={[1, 1 / 2]} display="flex" alignItems="center" justifyContent="flex-end">
          <Text color="dark" size={16} lineHeight={24} weight="300" mr={24}>Filter By:</Text>
          <Dropdown
            items={faqs?.categories}
            label="Program conditions"
            onSelect={console.log}
            width={235}
          />
        </Box>
        <Box width={1}>
          <Divider mt="64px" mb="30px" color="gray-300" />
        </Box>
        <Box width={1}>
          <Questions
            questions={faqs?.items}
          />
        </Box>
      </Flex>
    </FaqWrapper>
  );
};

export default FaqSection;
