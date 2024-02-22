import React from "react";

const Header = () => {
  return (
    <div className="header-section flex mt-24">
      <div className="px-5  md:px-10 grid grid-cols-1 md:grid-cols-2">
        <div className="left-banner col-span-1 md:col-span-1 p-10 ms-10">
          <div className="header-text text-4xl text-center text-white lg:text-5xl lg:text-start leading-tight font-bold">
            <h1>
              Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha güçlü
            </h1>
          </div>
          <div className="mt-10 m-auto flex flex-col md:flex-row space-x-0 md:space-x-5">
            <input
              className="sm:w-fit md:w-2/5 p-5 border-2 rounded-md bg-transparent text-white border-white focus-visible:outline-none mb-4 md:mb-0"
              type="text"
              placeholder="E-posta/Telefon"
            />
            <button className="w-full md:w-3/5 border-2 bg-white rounded-full p-5">
              OKX'i Deneyimleyin
            </button>
          </div>
          <div className="partner-banner flex justify-around  row-span-1 mt-20 min-h-16 text-white">
            <div className="partner-item w-fit md:w-1/4">
              <img
                className="w-40"
                src="https://www.okx.com/cdn/assets/imgs/236/DD7AC9432E675714.png?x-oss-process=image/format,webp/ignore-error,1"
                alt="Tribeca_logo"
              />
            </div>
            <div className="partner-item w-1/3 md:w-1/4">
              <img
                className="w-40"
                src="https://www.okx.com/cdn/assets/imgs/2210/499A92F3657A52EC.png?x-oss-process=image/format,webp/ignore-error,1"
                alt="Mclaren-logo"
              />
            </div>
            <div className="partner-item w-1/3 md:w-1/4 lg:w-1/6">
              <img
                className="w-40"
                src="https://www.okx.com/cdn/assets/imgs/2210/6279B178FADAFCC5.png?x-oss-process=image/format,webp/ignore-error,1"
                alt="Manchester_logo"
              />
            </div>
          </div>
        </div>
        <div className="right-banner col-span-1 md:col-span-1 ">
          <div className="video-container flex justify-center">
            <video autoPlay muted loop width={280} height={580} className="">
              <source
                src="https://www.okx.com/cdn/assets/files/241/32192407FC118924.webm"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
