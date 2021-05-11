import { Text } from "Elements";
import { TextProps } from "Elements/Text";
import { FC, useState } from "react";
import styled, { css } from "styled-components";

type Props = {
  label?: string;
  text?: string;
  texts?: string[];
  textProps?: Partial<TextProps>;
  labelProps?: Partial<TextProps>;
  toggler?: FC<{ active?: boolean, onToggle: (active: boolean) => void }>;
};

const Accordion: FC<Props> = ({
  label,
  text,
  texts,
  textProps = {},
  labelProps = {},
  toggler: Toggler,
}) => {
  const [isActive, setIsActive] = useState<boolean>();

  return (
    <AccordionWrapper active={isActive}>
      <AccordionHeader>
        <AccordionLabel {...labelProps}>{label}</AccordionLabel>
        {Toggler && (
          <Toggler
            active={isActive}
            onToggle={setIsActive}
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
      max-height: 700px;
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
`;

const AccordionLabel = styled(Text)``;

const AccordionText = styled(Text)`
  &:last-child {
    margin-bottom: 0;
  }
`;
