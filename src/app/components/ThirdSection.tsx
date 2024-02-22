import React, { useState, useEffect } from 'react';

const ThirdSection = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="mt-10">
      {windowWidth !== undefined && (
        <div className="third-section p-3 mt-10 flex justify-center">
          <div className="section p-5 flex flex-col text-white font-bold">
            <h1 className="text-2xl lg:text-5xl text-center">
              {windowWidth < 768
                ? 'Herkes için bir mod'
                : 'Yolculuğun Her Aşamasında Sizinle'}
            </h1>
            <span className="text-center text-xl mt-10 text-bold">
              {windowWidth < 768
                ? 'Al-sat işlemlerinden, DeFi dünyasına veya NFT piyasasına; hepsi bir yerde.'
                : 'İlk kripto al-sat deneyiminizden ilk NFT işleminize kadar, tüm süreç boyunca size rehberlik edeceğiz.'}
            </span>
            <div className="video-container mt-10 flex justify-center">
              {windowWidth < 768 ? (
                <img
                  src="https://www.okx.com/cdn/assets/imgs/2210/602389EA3A7E31BD.gif"
                  alt=""
                />
              ) : (
                <video autoPlay muted loop width={936} height={253} className="">
                  <source src="https://www.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm" type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThirdSection;
