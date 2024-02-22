import { Fragment, useState, ReactNode } from 'react'
import { Menu, Transition } from '@headlessui/react'

interface CustomDropdownProps {
  icon: JSX.Element;
  children: ReactNode;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
        <Menu.Button
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-2xl shadow-sm"
        >
          {icon}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 HiOutlineDownload rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
          <div className="py-1">
            {children}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default CustomDropdown;
