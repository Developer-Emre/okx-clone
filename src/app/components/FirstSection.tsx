import React from 'react'

const FirstSection = () => {
  return (
    <div className='first-section p-3 mt-10 flex justify-center'>
        <div className='section p-5 flex flex-col text-white font-bold '>
            <h1 className=' text-2xl lg:text-5xl text-center'>Profesyonel İşlemler Yapın</h1>
            <span className='text-center mt-10 text-gray-400'>En Düşük İşlem Ücretleri, En Hızlı İşlemler, Güçlü API Desteği ve Daha Fazlası</span>
            <div className="video-container mt-10 flex justify-center">
              <video autoPlay muted loop width={936} height={536} className="">
                <source src="https://www.okx.com/cdn/assets/files/2212/882D5049A31E763B.mp4" type="video/mp4" />
              </video>
            </div>
        </div>
    </div>
  )
}

export default FirstSection