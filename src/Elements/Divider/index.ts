import { Box, BoxType } from "reflexbox";
import styled from "styled-components";
import { ThemeColorKeys } from "Theme";

interface DividerType extends BoxType {
  color?: ThemeColorKeys;
};

const Divider: DividerType = styled(Box)`
  border-bottom: 1px solid ${({ theme, color = 'lightGray' }) => theme.colors[color]};
`;

export default Divider;
