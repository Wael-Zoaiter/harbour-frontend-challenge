import { FC } from "react";
import { ButtonStyled } from "./Styles";

type Props = {};

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
