import styled from "styled-components";

const MenuIcon = () => {
  return (
    <Wrapper>
      <Bar />
      <Bar />
      <Bar />
    </Wrapper>
  );
};

export default MenuIcon;

const Wrapper = styled.span`
  position: relative;
  top: 4px;
  width: 26px;
  padding: 5px 0px;
  transform: translateZ(0px);
  display: inline-block;

  &::before {
    top: 3px;
    left: 0px;
  }

  &::after {
    top: 17px;
    right: 0px;
  }

  &::before, &::after {
    content: "";
    position: absolute;
    z-index: 20;
    width: 2px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors['primary']};
    border: 2px solid ${({ theme }) => theme.colors['white']};
    transition: transform 200ms ease 0s;
    transform: translateX(0px) translateZ(0px);
    box-sizing: content-box;
  }

  &:hover {
    cursor: pointer;

    &::before {
      transform: translateX(10px) translateZ(0px);
    }

    &::after {
      transform: translateX(-10px) translateZ(0px);
    }
  }
`;

const Bar = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  border-top: 2px solid ${({ theme }) => theme.colors['white']};
  border-right-color: ${({ theme }) => theme.colors['white']};
  border-bottom-color: ${({ theme }) => theme.colors['white']};
  border-left-color: ${({ theme }) => theme.colors['white']};
  height: 0px;
  margin-bottom: 5px;
  transition: transform 200ms ease 0s, opacity 200ms ease 0s;
  transform: translateY(0px) translateZ(0px);
  box-sizing: content-box;
`;
