import React from 'react'
import Image from 'next/image'
import Okx from '../assets/images/DBDC29AD98D75479.webp'

const FourthSection = () => {
  return (
    <div className="fourth-section flex flex-col mt-24 mb-24 mx-auto">
    <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 items-end">
      <div className="left-banner order-1 md:order-1 p-10 flex flex-col justify-center items-center md:items-start">
        <div className="header-text text-4xl text-center leading-tight text-white lg:text-5xl lg:text-start font-bold">
          <h1>OKX Nedir?</h1>
          <span className='text-sm lg:text-xl'>Birinci sınıf iş ortaklarımızın yardımıyla neden yeni favori kripto uygulamanızın biz olduğumuzu öğrenin.</span>
        </div>
        <div className="mt-5 flex flex-row bg-white rounded-full p-1 space-x-4">
          <button className="rounded-full py-3 px-6 font-semibold">
            Keşfet
          </button>
        </div>
      </div>
      <div className="right-banner order-2 md:order-2 flex justify-center">
        <div className="okx-container items-end">
          <Image src={Okx} width={374} height={112} alt='' />
        </div>
      </div>
    </div>
    <div className='video-section mt-10 text-white'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 md:px-10">
        <div className="video-item relative md:col-span-1 w-fit">
         <video controls >
            <source src='https://www.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4' type='video/mp4' />
         </video>
         <div className='video-text absolute flex flex-col p-5 right-0 left-0 text-center top-0 bg-gradient-to-b from-black'>
            <span className='text-2xl mt-5 font-semibold'>Teknik Direktör Pep Guardiola</span>
            <span className='text-md font-semibold text-gray-300'>"Çılgın Futbol Formasyonu"nu açıklıyor.</span>
         </div>
        </div>
        <div className="video-item relative md:col-span-1 w-fit">
         <video controls >
            <source src='https://www.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4' type='video/mp4' />
         </video>
         <div className='video-text absolute flex flex-col p-5 right-0 left-0 text-center top-0 bg-gradient-to-b from-black'>
            <span className='text-2xl mt-5 font-semibold'>F1 Pilotu Daniel Ricciardo</span>
            <span className='text-md font-semibold text-gray-300'>"“OKX bir yarış arabası mı” diye soruyor.</span>
         </div>
        </div>
        <div className="video-item relative md:col-span-1 w-fit">
         <video controls >
            <source src='https://www.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4' type='video/mp4' />
         </video>
         <div className='video-text absolute flex flex-col p-5 right-0 left-0 text-center top-0 bg-gradient-to-b from-black'>
            <span className='text-2xl mt-5 font-semibold'>Snowboard Yarışçısı Scotty James</span>
            <span className='text-md font-semibold text-gray-300'>Tüm aileyi bir araya getiriyor.</span>
         </div>
        </div>
      </div>
    </div>
  </div>
  
 
  )
}

export default FourthSection