"use client";
import React, { useState } from 'react';

const SecondSection: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'Borsa' | 'Web3'>('Borsa');

  const handleOptionChange = (option: 'Borsa' | 'Web3') => {
    setSelectedOption(option);
  };

  const getImageSrc = () => {
    return selectedOption === 'Borsa'
      ? 'https://www.okx.com/cdn/assets/imgs/241/6C3C0C7503A6686E.png'
      : 'https://www.okx.com/cdn/assets/imgs/241/C40C936CC5211A11.png?x-oss-process=image/format,webp/ignore-error,1';
  };

  const getSpanText = () => {
    return selectedOption === 'Borsa'
      ? 'Kriptoda yeni misiniz? Hiç sorun değil. Tek dokunuşla 5 USD değerinde bile kripto satın alabilir ve ilerledikçe becerilerinizi geliştirebilirsiniz.'
      : 'Tüm favori zincirlerinizi destekleyen dünyanın en iyi NFT pazar yeri, DEX’i ve cüzdanını keşfedin';
  };

  const getButtonClass = (option: 'Borsa' | 'Web3') => {
    return option === selectedOption
      ? 'bg-white text-black'
      : 'bg-black text-white';
  };

  return (
    <div className="second-section flex mt-24 mb-24">
      <div className="px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="left-banner order-2 md:order-1">
          <div className="image-container flex justify-center">
            <img
              width={280}
              height={580}
              src={getImageSrc()}
              alt=""
            />
          </div>
        </div>
        <div className="right-banner order-1 md:order-2 p-10 flex flex-col justify-center items-center md:items-start">
          <div className="header-text text-4xl text-center leading-tight text-white lg:text-5xl lg:text-start font-bold">
            <h1>Tek Platform, Sınırsız Özellik</h1>
          </div>
          <div className="mt-5 flex flex-row ring-1 ring-white rounded-full p-1 space-x-4">
            <button
              className={`rounded-full py-3 px-6 text-sm font-bold ${getButtonClass(
                'Borsa'
              )}`}
              onClick={() => handleOptionChange('Borsa')}
            >
              Borsa
            </button>
            <button
              className={`rounded-full py-3 px-6 text-sm font-bold ${getButtonClass(
                'Web3'
              )}`}
              onClick={() => handleOptionChange('Web3')}
            >
              Web3
            </button>
          </div>
          <span className="text-white mt-5 text-center lg:text-start">
          {getSpanText()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
