import { MenuIcon } from "Elements";
import { FC } from "react";
import { Flex, Box } from 'reflexbox';
import { ApplyNowButton, HeaderWrapper, Logo, ScholarshipName } from "./Styles";

type HeaderProps = {
 name: string;
};

const Header: FC<HeaderProps> = ({ name }) => {
  return (
    <HeaderWrapper>
      <Flex alignItems="center" justifyContent="space-between" height="100%">
        <Box display="flex" alignItems="center">
          <Logo />
          <ScholarshipName>/{name}</ScholarshipName>
        </Box>
        <Box>
          <ApplyNowButton>Apply Now</ApplyNowButton>
          <MenuIcon />
        </Box>
      </Flex>
    </HeaderWrapper>
  );
}

export default Header;
