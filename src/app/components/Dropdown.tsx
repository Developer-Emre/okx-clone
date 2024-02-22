import React, { ReactNode, useState } from 'react';
import { GoChevronDown,GoChevronUp } from "react-icons/go";


interface DropdownProps {
  text: string;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ text, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="nav-item cursor-pointer" onClick={handleClick}>
      <div
        className="flex items-center ms-5"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        <span className='font-extralight'>{text}</span>
        {isOpen ? (
          <GoChevronUp className="ms-1" />
        ) : (
          <GoChevronDown className="ms-1" />
        )}
        {isOpen && (
          <div className="dropdown absolute top-11 w-fit bg-white border rounded-md shadow-lg">
            {children}
          </div>
        )}
      </div>
    </li>
  );
};

export default Dropdown;
