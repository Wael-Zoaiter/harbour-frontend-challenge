import { BorderedBox, Text } from "Elements";
import useDateDiff from "Hooks/useDateDiff"

const CloseTimer = ({ startDate }: { startDate?: string }) => {
  const dateDiff = useDateDiff(new Date(startDate || ''));

  return (
    <BorderedBox p="27px 25px 25px 40px">
      <Text color="primary" mb={16} size={16} weight="500">Application close in</Text>
      <Text size={27} weight="300">
        {dateDiff.days} Days
        <Text as="span" mx={8}>:</Text>
        {dateDiff.hours} Hrs
        <Text as="span" mx={8}>:</Text>
        {dateDiff.minutes} Min
        <Text as="span" mx={8}>:</Text>
        {dateDiff.segments} Seg
      </Text>
    </BorderedBox>
  );
};

export default CloseTimer;
