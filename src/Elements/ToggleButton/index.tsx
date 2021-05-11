import { Button } from "Elements";
import { FC } from "react";
import styled, { css, keyframes } from "styled-components";

type Props = {
  active?: boolean;
  onToggle: (active: boolean) => void;
};

const ToggleButton: FC<Props> = ({ active, onToggle }) => {
  return (
    <ToggleButtonWrapper active={active}>
      <ToggleButtonStyled
        active={active}
        onClick={() => onToggle?.(!active)}
      >
        <ToggleButtonVerticalBar />
        <ToggleButtonHorizontalBar />
      </ToggleButtonStyled>
    </ToggleButtonWrapper>
  );
};

export default ToggleButton;

const ToggleButtonWrapper = styled.div<{ active?: boolean }>`
  ${({ theme, active }) => {
    const outerWidth = 50;
    const buttonWidth = 46;
    const outerPadding = outerWidth - buttonWidth;
    const outerBorderWidth = 1;

    return css`
      border: ${outerBorderWidth}px solid ${theme.colors['gray-300']};
      padding: ${outerPadding}px;

      &, ${ToggleButtonStyled} {
        width: ${outerWidth}px;
        height: ${outerWidth}px;
        border-radius: 50%;
        background-color: ${theme.colors['white']};
      }
    `;
  }}
`;

const borderCloseAnimation = (
  innerBorderWidth: number,
  buttonWidth: number,
) => keyframes`
  from {
    border-width: ${innerBorderWidth}px;
    width: ${buttonWidth - (innerBorderWidth * 2)}px;
    height: ${buttonWidth - (innerBorderWidth * 2)}px;
  }
  to {
    border-width: ${buttonWidth / 2}px;
    width: 0;
    height: 0;
  }
`;

const borderOpenAnimation = (
  innerBorderWidth: number,
  buttonWidth: number,
) => keyframes`
  from {
    border-width: ${buttonWidth / 2}px;
    width: 0;
    height: 0;
  }
  to {
    border-width: ${innerBorderWidth}px;
    width: ${buttonWidth}px;
    height: ${buttonWidth}px;
  }
`;

const ToggleButtonStyled = styled(Button)<{ active?: boolean }>`
  ${({ theme, active }) => {
    const buttonWidth = 46;
    const innerBorderWidth = 2;

    return css`
      position: relative;
      padding: 0;

      &::before {
        content: '';
        width: ${buttonWidth}px;
        height: ${buttonWidth}px;
        border-radius: 50%;
        border-style: solid;
        position: absolute;
        border-color: ${theme.colors['primary']};
        border-width: ${innerBorderWidth}px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        z-index: 9;
        ${active === true
          ? css`
            animation: .7s ease-in-out .7s 1 ${borderCloseAnimation(innerBorderWidth, buttonWidth)};
          ` : active === false
          ? css`
            animation: .7s ease-in-out .7s 1 ${borderOpenAnimation(innerBorderWidth, buttonWidth)};
          ` : ''}
      }
    `;
  }}
`;

const ToggleButtonBar = styled.span``;

const ToggleButtonVerticalBar = styled(ToggleButtonBar)``;

const ToggleButtonHorizontalBar = styled(ToggleButtonBar)``;
