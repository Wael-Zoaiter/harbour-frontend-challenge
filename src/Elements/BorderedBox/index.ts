import { Box, BoxType } from "reflexbox";
import styled from "styled-components";

const BorderedBox: BoxType = styled(Box)`
  background-color: ${({ theme }) => theme.colors['white']};
  border: 1px solid ${({ theme }) => theme.colors['lightGray']};
  border-radius: 4px;
`;

export default BorderedBox;
