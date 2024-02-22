import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { GoSearch } from "react-icons/go";

const Search = () => {
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setSearchVisible(window.innerWidth >= 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="search-container">
      {isSearchVisible && (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center  rounded-md px-3 ms-5 text-sm font-semibold ring-inset border-none">
              <GoSearch className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-4 w-fit origin-top-right rounded-md bg-white shadow-lg ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <div className="search relative flex items-center justify-center p-5">
                  <GoSearch className="text-black absolute left-6 top-1/2 transform -translate-y-1/2" size={15} />
                  <div className="input-wrapper flex items-center rounded-sm p-1 bg-gray-100 focus:bg-white">
                    <input className="rounded-sm bg-transparent p-2 w-80 text-black text-sm pl-5 focus:outline-black focus:bg-white" type="text" placeholder="Kripto, Ürünleri Arayın" />
                  </div>
                </div>
                <div className="popular text-black p-5">
                  <h1 className="font-bold">Popüler Aramalar</h1>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </div>
  );
};

export default Search;
