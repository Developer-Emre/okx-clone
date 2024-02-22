"use client";
import { useEffect,useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import Logo from "../assets/images/okx-logo.png";
import Download from "../assets/images/indir.png";
import CustomDropdown from "./MobilDropdown";
import Search from './Search'

//* iconlar
import { IoWalletOutline,IoNotificationsOutline, IoMenu } from "react-icons/io5";
import { AiOutlineBank } from "react-icons/ai";
import { FaUsersRays,FaRegCircleQuestion } from "react-icons/fa6";
import { LuMonitorUp } from "react-icons/lu";
import { FiAward } from "react-icons/fi";
import { VscCopy } from "react-icons/vsc";
import { LiaSuperpowers } from "react-icons/lia";
import { RiLoopRightFill } from "react-icons/ri";
import { HiOutlineDownload } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";

const Navbar: React.FC = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDropdownOpen(window.innerWidth <= 768);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
  return (
    <div className="navbar text-sm p-1 md:flex lg:flex">
      <div className="navbar-wrap flex justify-between items-center lg:m-auto">
        <div onClick={toggleDropdown} className=" text-white lg:hidden">
          <div>
      {/* Toggle butonu */}
      <button onClick={toggleDropdown}>
        {isDropdownOpen ? <IoMdClose size={25} /> : <IoMenu size={25} />}
      </button>
      
      {isDropdownOpen && (
  <div className="top-0 w-100 z-50"> 
      <div className="flex p-3">
        <a href="#" className="ring-1 ring-gray-300 rounded-full p-3">Kaydol</a>
        <a href="#" className="p-3">Giriş Yap</a>
      </div>
      <div className="flex text-center">
        <a href="#" className="ring-1 w-full ring-gray-300 bg-zinc-800	 rounded-full m-3 p-3">Borsa</a>
        <a href="#" className="p-3 w-full my-auto bg-zinc-800 rounded-full">Web3</a>
      </div>
      <div className="nav-item mt-5 p-3 text-xl">
        <div className="flex mt-5 justify-between">
          <span>Kripto Satın Al</span>
          <GoChevronDown />
        </div>
        <div className="flex mt-5 justify-between">
          <span>Keşfet</span>
          <GoChevronDown />
        </div>
        <div className="flex mt-5 justify-between">
          <span>Al-sat</span>
          <GoChevronDown />
        </div>
        <div className="flex mt-5 justify-between">
          <span>Finans</span>
          <GoChevronDown />
        </div>
        <div className="flex mt-5 justify-between">
          <span>Oluştur</span>
          <GoChevronDown />
        </div>
        <div className="flex mt-5 justify-between">
          <span>Kurumsal</span>
          <GoChevronDown />
        </div>
        <div className="flex mt-5 justify-between">
          <span>Akademi</span>
        </div>
        <div className="flex mt-5 justify-between">
          <span>Daha Fazlası</span>
          <GoChevronDown />
        </div>
        <div className="flex mt-5 justify-between">
          <span>Destek</span>
          <GoChevronDown />
        </div>
        <div className="flex mt-5 justify-between">
          <span>Türkçe/TRY</span>
        </div>

      </div>
  </div>
)}

    </div>
        </div>
        <div className={`logo-items-center p-2 flex ${isDropdownOpen ? 'hidden' : ''}`}>
                  <Image className="h-8 w-auto cursor-pointer" src={Logo} alt="Okx_logo" />
        <div className="rounded text-sm ms-5 hidden ring-1 ring-gray-600 lg:flex ">
          <button className="p-1 border-1 bg-white rounded">Borsa</button>
          <button className="p-1 border-1 bg-zinc-800 font-extralight text-white rounded">Web3</button>
        </div>
      <div className="navbar-list mx-auto my-auto hidden lg:block">

        <ul className="text-white flex justify-around items-center">
        <div className="line text-gray-700 ms-5">
        |
        </div>
        
          <Dropdown text="Kripto Satın Al "> 
            <div className="flex items-center m-3 px-4 py-2 text-sm text-gray-700 rounded-md  hover:bg-gray-50">
              <IoWalletOutline className="me-3" size={25} />
              <div className="flex flex-col p-1">
              <a href="#" className="">Hızlı Kripto Satın Al</a>
                <span className="text-gray-400 font-light">Visa, Mastercard Ve Diğerleri</span>
              </div>
            </div>
            <div className="flex items-center m-3 px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50">
              <div className=" flex">
              <FaUsersRays className="me-3" size={30} />
              <div className="flex flex-col w-60 p-1">
              <a href="#" className="">P2P İşlemleri</a>
                <span className="text-gray-400 font-light">Yüzlerce Ödeme Yöntemi, Sıfır İşlem Ücreti ile kripto Alım Satım</span>
              </div>
              </div>
            </div>
            <div className="flex items-center m-3 px-4 py-2 text-sm text-gray-700 rounded-md  hover:bg-gray-50">
              <AiOutlineBank className="me-3" size={25} />
              <div className="flex flex-col p-1">
              <a href="#" className="">Diğer Ödeme Yöntemleri</a>
                <span className="text-gray-400 font-light">Banxa, Simplex ve Diğerleri</span>
              </div>
            </div>
          </Dropdown>

          <Dropdown text="Keşfet">
          <div className="flex items-center m-3 px-4 py-2 text-sm text-gray-700 rounded-md  hover:bg-gray-50">
              <LuMonitorUp className="me-3" size={25} />
              <div className="flex flex-col p-1">
              <a href="#" className="">Piyasalar</a>
                <span className="text-gray-400 font-light">Güncel Kripto Fiyatları, Hacimleri ve Tüm Verileri</span>
              </div>
            </div>
            <div className="flex items-center m-3 px-4 py-2 text-sm text-gray-700 rounded-md  hover:bg-gray-50">
              <FiAward className="me-3" size={25} />
              <div className="flex flex-col p-1">
              <a href="#" className="">Fırsatlar</a>
                <span className="text-gray-400 font-light">En Popüler ve Yeni Kriptolar, Piyasa Fiyatları</span>
              </div>
            </div>
            <div className="flex items-center m-3 px-4 py-2 text-sm text-gray-700 rounded-md  hover:bg-gray-50">
              <VscCopy className="me-3" size={25} />
              <div className="flex flex-col p-1">
              <a href="#" className="">Copy Trade</a>
                <span className="text-gray-400 font-light">En İyi Traderlarla Kazançlı İşlemler</span>
              </div>
            </div>
          </Dropdown>
          
          <Dropdown text="Al-Sat">
            <div className="p-3">
              <span className="text-gray-400 text-sm font-semibold">İşlem Türleri</span>
            </div>
          <div className="flex items-center m-3 px-4 py-2 text-sm text-gray-700 rounded-md  hover:bg-gray-50">
              <LiaSuperpowers className="me-3" size={25} />
              <div className="flex flex-col p-1 w-72">
              <a href="#" className="">Dönüştür</a>
                <span className="text-gray-400 font-light">Alış Satış Farkı ve Komisyon Olmadan Hızlı Dönüştürme İşlemleri</span>
              </div>
          </div>
          <div className="flex items-center m-3 px-4 py-2 text-sm text-gray-700 rounded-md  hover:bg-gray-50">
              <RiLoopRightFill className="me-3" size={25} />
              <div className="flex flex-col p-1 w-72">
              <a href="#" className="">Spot İşlemler</a>
              <div>
                <span className="text-gray-400 font-light">Kolaylıkla Kripto Al Sat İşlemleri</span>
              </div>
              </div>
          </div>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 3</a>
          </Dropdown>

          <Dropdown text="Finans">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 2</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 3</a>
          </Dropdown>

          <Dropdown text="Kurumsal">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 2</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 3</a>
          </Dropdown>
          <div className="ms-5 font-extralight">
            <button>Akademi</button>
          </div>

          <Dropdown text="Daha Fazlası">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 1</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 2</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Seçenek 3</a>
          </Dropdown>
          <div className="flex items-center text-xs vi">
            <Search />
            <a className="ms-5" href="#">Giriş Yap</a>
            <a className="ms-5 ring-1 ring-white p-2 rounded-2xl" href="#">Kaydol</a>
            <div className="line ms-5 text-gray-700">
              |
            </div>
            <CustomDropdown icon={<HiOutlineDownload />}>
              <div className="p-5 text-center text-black">
                <h3 className="text-sm text-bold">Mobil Uygulamayı İndir</h3>
                <Image className="p-8" src={Download} alt={""} />
                <div className="bg-gray-100 p-5 rounded-lg">
                 <a className="text-xs border-2 p-1 rounded-xl bg-white" href="">Tüm Seçenekler</a>
                  <p className="text-xs text-gray-400 mt-2">Mobil ve Masaüstü</p>
                </div>
              </div>
            </CustomDropdown>
            <div className="language gap-x-1.5 px-3 py-2">
              <a href="">
              <IoNotificationsOutline size={25} />
              </a>
            </div>
            <div className="language gap-x-1.5 px-3 py-2">
              <a href="">
              <FaRegCircleQuestion size={25} />
              </a>
            </div>
            <div className="language gap-x-1.5 px-3 py-2">
              <a href="">
              <TfiWorld size={25} />
              </a>
            </div>
          </div>
        </ul>
      </div>
      </div>
    </div>
      </div>
  );
};

export default Navbar