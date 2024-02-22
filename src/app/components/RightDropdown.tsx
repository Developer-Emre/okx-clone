import React, { ReactNode, useState } from 'react';

interface RightDropdownProps {
  children: ReactNode;
}

const RightDropdown: React.FC<RightDropdownProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
        {isOpen && (
          <div className="dropdown right-12 w-48 bg-white border rounded-md shadow-lg absolute">
            {children}
          </div>
        )}
      </div>
  );
};

export default RightDropdown;
