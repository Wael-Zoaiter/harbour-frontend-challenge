import { ArrowDownIcon } from "Assets/images";
import { Button, Text } from "Elements";
import { TextProps } from "Elements/Text";
import { FC, useState } from "react";
import styled, { css } from "styled-components";

type ToggleCompProps = { active?: boolean, onToggle: (active: boolean) => void };

type Props = {
  label?: string;
  text?: string;
  texts?: string[];
  textProps?: Partial<TextProps>;
  labelProps?: Partial<TextProps>;
  toggler?: FC<ToggleCompProps>;
};

const Accordion: FC<Props> = ({
  label,
  text,
  texts,
  textProps = {},
  labelProps = {},
  toggler: Toggler = AccordionToggler,
}) => {
  const [isActive, setIsActive] = useState<boolean>();

  return (
    <AccordionWrapper active={isActive}>
      <AccordionHeader>
        <AccordionLabel {...labelProps}>{label}</AccordionLabel>
        {Toggler && (
          <Toggler
            active={isActive}
            onToggle={active => setIsActive(active)}
          />
        )}
      </AccordionHeader>
      <AccordionBody>
        {text ? <AccordionText {...textProps}>{text}</AccordionText> : null}
        {texts?.map((txt, idx) => <AccordionText {...textProps} key={`answer-${idx}`}>{txt}</AccordionText>)}
      </AccordionBody>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionBody = styled.div`
  padding-top: 32px;
`;

const AccordionWrapper = styled.div<{ active?: boolean }>`
  ${AccordionBody} {
    overflow: hidden;
    transition: .5s ease-in-out max-height, .5s ease-in-out padding;

    ${({ active }) => active
    ? css`
      max-height: 1000px;
      padding-top: 32px;
    `
    : css`
      max-height: 0;
      padding-top: 0;
    `}
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const AccordionLabel = styled(Text)``;

const AccordionText = styled(Text)`
  &:last-child {
    margin-bottom: 0;
  }
`;

const DefaultToggler = styled(ArrowDownIcon)<{ active?: boolean }>`
  position: absolute;
  right: 0;
  margin: auto;
  transition: .5s ease-in-out transform;
  ${({ active }) => active
  ? css`
    transform: rotateX(180deg);
  ` : css`
    transform: rotateX(0deg);
  `}
`;

const AccordionToggler: FC<ToggleCompProps> = ({ active, onToggle }) => (
  <Button onClick={() => onToggle?.(!active)}>
    <DefaultToggler active={active} />
  </Button>
);
