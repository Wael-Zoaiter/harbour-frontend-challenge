
import { isNil } from "Helpers";
import useElementSize from "Hooks/useElementSize";
import { FC, useState } from "react";
import { DropdownArrow, DropdownItem, DropdownMenu, DropdownToggler, DropdownWrapper } from "./Styles";

type Props = {
  onSelect: (index: number) => void;
  label: string;
  items?: string[];
  width: number;
};

const Dropdown: FC<Props> = ({ onSelect, items, label, width }) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [activeIndex, setActiveIndex] = useState<number>();
  const btnLabel = !isNil(activeIndex) && items ? items[activeIndex || 0] : label;
  const [togglerElem, { height: togglerHeight }] = useElementSize<HTMLButtonElement>();

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onSelect(index);
  };

  return (
    <DropdownWrapper open={isOpen} width={width} height={togglerHeight}>
      <DropdownToggler
        ref={togglerElem}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span>{btnLabel}</span>
        {items && items.length > 0 && (
          <DropdownMenu open={isOpen}>
            {items.map((item, index) => (
              <DropdownItem
                key={item}
                active={activeIndex === index}
                onClick={() => handleClick(index)}
              >{item}</DropdownItem>
            ))}
          </DropdownMenu>
        )}
        <DropdownArrow direction={isOpen ? 'up' : 'down'} />
      </DropdownToggler>
    </DropdownWrapper>
  );
};

export default Dropdown;
