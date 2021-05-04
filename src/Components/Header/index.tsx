import { FC } from "react";

type HeaderProps = {
 scholarshipName: string;
};

const Header: FC<HeaderProps> = ({ scholarshipName }) => {
  return (
    <header className="header">
    </header>
  );
}

export default Header;
