import { ArrowDownIcon } from "Assets/images";
import { Button } from "Elements";
import styled, { css } from "styled-components";

export const DropdownToggler = styled(Button)`
  padding: 17px 55px 17px 25px;
  border-radius: 29px;
  background-color: ${({ theme }) => theme.colors['white']};
  border: 1px solid ${({ theme }) => theme.colors['lightGray']};
  color: ${({ theme }) => theme.colors['primary']};
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  position: absolute;
  left: 0;
  right: 0;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
  }
`;

export const DropdownArrow = styled(ArrowDownIcon)<{ direction: 'up' | 'down' }>`
  position: absolute;
  right: 27px;
  margin: auto;
  transition: .5s ease-in-out transform;
  ${({ direction }) => direction === 'up'
  ? css`
    transform: rotateX(180deg);
  ` : css`
    transform: rotateX(0deg);
  `}
`;

export const DropdownMenu = styled.div<{ open?: boolean }>`
  background-color: ${({ theme }) => theme.colors['white']};
  border: 1px solid ${({ theme }) => theme.colors['lightGray']};
  border-top: 0;
  border-bottom: 0;
  margin-left: -26px;
  box-sizing: border-box;
  overflow: hidden;
  transition: .5s ease-in-out max-height;

  ${({ open }) => open
  ? css`
    max-height: 300px;
  ` : css`
    max-height: 0;
    border-color: transparent;
    transition: .5s ease-in-out max-height, 1.5s ease-in-out border-color;
  `}
`;

export const DropdownItem = styled(Button)<{ active: boolean }>`
  padding: 12px 25px;
  width: 100%;
  font-weight: 300;

  &:first-child {
    margin-top: 12px;
  }

  &:last-child {
    margin-bottom: -5px;
  }
`;

export const DropdownWrapper = styled.div<{ open?: boolean, width?: number, height?: number }>`
  position: relative;

  &, ${DropdownToggler}, ${DropdownMenu} {
    z-index: 99;
    width: ${({ width }) => width ? `${width}px` : ''};
  }

  ${DropdownToggler} {
    top: -${({ height }) => height ? `${height / 2}px` : 0};
  }

  ${DropdownArrow} {
    top: ${({ height }) => height ? `${height / 2}px` : 0};
  }
`;
