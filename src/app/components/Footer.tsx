import React,{useState} from 'react'
import Image from 'next/image'

import Logo from '../assets/images/okx-logo.png'
import QrCode from '../assets/images/indir.png'

// icon
import { TfiWorld } from "react-icons/tfi";
import { GoChevronDown } from "react-icons/go";



const Footer = () => {

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsOpen(!isOpen);
        };

  return (
    <footer className="footer text-white p-4">
    <div className="container mx-auto items-center">
      <div className="logo mt-5">
        <Image src={Logo} alt='OKX_logo' width={100} />
        <span className="text-sm text-gray-400">©2017 - 2024 OKX.COM</span>
      </div>
      <div className='language relative items-center flex mt-6'>
      <TfiWorld className='absolute mt-5 ms-1' />
      <a href="#" className='relative rounded-s ring-1 ring-gray-500 p-6 mt-5 flex'>
        Türkçe/TRY
      <GoChevronDown className='ml-1' />
      </a>
    </div>
    <div className='mt-5 grid grid-cols-6'>
  <div className="col-span-5 ">
    <ul className=" block lg:flex space-x-4">
      <li className='col-span-1 me-3'>
        <span className='font-semibold text-xl'>OKX Hakkında</span>
        <ul className='text-gray-500 cursor-pointer'>
          <li className='mb-3 mt-3 hover:text-white'>Hakkımızda</li>
          <li className='mb-3 hover:text-white'>Kariyer</li>
          <li className='mb-3 hover:text-white' >Bize Ulaşın</li>
          <li className='mb-3 hover:text-white'>Hizmet Şartları</li>
          <li className='mb-3 hover:text-white'>Gizlilik Politikası</li>
          <li className='mb-3 hover:text-white'>Açıklamalar</li>
          <li className='mb-3 hover:text-white'>Feragatname</li>
          <li className='mb-3 hover:text-white'>Hukuki Yaptırım</li>
          <li className='mb-3 hover:text-white'>Okx Uygulaması</li>
        </ul>
      </li>
      <li className='col-span-1'>
        <span className='font-semibold text-xl'>Ürünler</span>
        <ul className='text-gray-500 cursor-pointer'>
          <li className='mb-3 mt-3 hover:text-white'>Kripto Satın Al</li>
          <li className='mb-3 hover:text-white'>P2P İşlemleri</li>
          <li className='mb-3 hover:text-white'>Kripto Dönüştür</li>
          <li className='mb-3 hover:text-white'>Al-Sat İşlemleri</li>
          <li className='mb-3 hover:text-white'>Gizlilik Politikası</li>
          <li className='mb-3 hover:text-white'>Earn</li>
          <li className='mb-3 hover:text-white'>OKC</li>
          <li className='mb-3 hover:text-white'>Web3</li>
          <li className='mb-3 hover:text-white'>Web3 Pazar Yeri</li>
          <li className='mb-3 hover:text-white'>Kripto Hesap Makinesi</li>
          <li className='mb-3 hover:text-white'>Al-Sat Botları</li>
          <li className='mb-3 hover:text-white'>Tüm Kripto Paralar</li>
          <li className='mb-3 hover:text-white'>Akademi</li>
          <li className='mb-3 hover:text-white'>TraidingView</li>
        </ul>
      </li>
      <li className='col-span-1'>
        <span className='font-semibold text-xl me-3'>Hizmetlerimiz</span>
        <ul className='text-gray-500 cursor-pointer'>
          <li className='mb-3 mt-3 hover:text-white'>İş Ortaklığı Programı</li>
          <li className='mb-3 hover:text-white'>V5 API</li>
          <li className='mb-3 hover:text-white'>Geçmiş Piyasa Verileri</li>
          <li className='mb-3 hover:text-white'>İşlem Ücretleri Tablosu</li>
          <li className='mb-3 hover:text-white'>Listeleme Başvurusu</li>
          <li className='mb-3 hover:text-white'>P2P İlanveren Başvurusu</li>
          <span className='font-semibold text-xl text-white'> Destek </span>
            <ul className='text-gray-500'>
                <li className='mb-3 mt-3 hover:text-white'>Destek Merkezi</li>
                <li className='mb-3 hover:text-white'>Resmi Kanal Doğrulama</li>
                <li className='mb-3 hover:text-white'>Duyurular</li>
                <li className='mb-3 hover:text-white'>OKK Toplulukları</li>
            </ul>
        </ul>
      </li>
      <li className='col-span-1'>
        <span className='font-semibold text-xl'>Kripto Satın Al</span>
        <ul className='text-gray-500 cursor-pointer'>
          <li className='mb-3 mt-3 hover:text-white'>USDC Satın Al</li>
          <li className='mb-3 hover:text-white'>USDT Satın Al</li>
          <li className='mb-3 hover:text-white'>Bitcoin Satın Al</li>
          <li className='mb-3 hover:text-white'>Ethereum Satın Al</li>
          <li className='mb-3 hover:text-white'>ADA Satın Al</li>
          <li className='mb-3 hover:text-white'>Litecoin Satın Al</li>
          <li className='mb-3 hover:text-white'>XRP Satın Al</li>
          <span className='font-semibold text-xl text-white'> Kripto Hesap Makinesi </span>
            <ul className='text-gray-500 cursor-pointer'>
                <li className='mb-3 mt-3 hover:text-white'>BTC/TRY</li>
                <li className='mb-3 hover:text-white'>ETH/TRY</li>
                <li className='mb-3 hover:text-white'>USDT/TRY</li>
                <li className='mb-3 hover:text-white'>SOL/TRY</li>
                <li className='mb-3 hover:text-white'>XRP/TRY</li>
            </ul>
        </ul>
      </li>
      <li className='col-span-1'>
        <span className='font-semibold text-xl'>Al-Sat</span>
        <ul className='text-gray-500 cursor-pointer'>
          <li className='mb-3 mt-3 hover:text-white'>BTC USDC</li>
          <li className='mb-3 hover:text-white'>ETH USDC</li>
          <li className='mb-3 hover:text-white'>BTC USDT</li>
          <li className='mb-3 hover:text-white'>ETH USDT</li>
          <li className='mb-3 hover:text-white'>MATIC USDT</li>
          <li className='mb-3 hover:text-white'>LTC USDT</li>
          <li className='mb-3 hover:text-white'>SOL USDT</li>
          <li className='mb-3 hover:text-white'>XRP USDT</li>
          <li className='mb-3 hover:text-white'>Bitcoin Fiyatı</li>
          <li className='mb-3 hover:text-white'>Ethereum Fiyatı</li>
          <li className='mb-3 hover:text-white'>Cardano Fiyatı</li>
          <li className='mb-3 hover:text-white'>Solana Fiyatı</li>
          <li className='mb-3 hover:text-white'>XRP Fiyatı</li>
        </ul>
      </li>
    </ul>
  </div>
  <div className="social-container hidden lg:col-span-1 lg:block">
    <ul className="">
      <li><span className='font-semibold text-xl mb-3'>OKX Uygulaması ile Dilediğiniz Zaman İşlem Yapabilirsiniz</span></li>
      <li className='p-3 mt-5 mb-5 bg-white font-semibold text-black text-center rounded-full'><a href="#">Kaydol</a></li>
      <li className='p-5 '>
        <div className='ring-1 ring-white'>
        <Image src={QrCode} alt='OKX_Download' />
        </div>
        <div className='mt-3 text-center'>
        <span >OKX uygulamasını indirmek için QR kodunu tarayın.</span>
        </div>
      </li>
    </ul>
  </div>
</div>

    </div>
  </footer>
  )
}

export default Footer