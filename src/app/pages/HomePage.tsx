"use client"
import React from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import Accordion  from "../components/Accordion";
import Footer  from "../components/Footer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="lg:m-20">
        <Header />
        <FirstSection/>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
          <h1 className="text-white text-center mb-10 font-semibold text-2xl lg:text-5xl">Sorularınız mı var?</h1>
        <div className="p-2 lg:m-10 rounded-lg">
        <Accordion title={"OKX nerede kuruldu?"} answer={"OKX, gelişmiş finansal tekliflere sahip yenilikçi bir kripto para borsasıdır. 180’den fazla bölgede dünya çapında milyonlarca kullanıcıya son teknoloji kripto alım-satımı ve kazanç hizmetleri sunuyoruz. OKX ile şunları yapabilirsiniz: Spot, marjin ve vadeli işlem piyasalarında yüzlerce token ve al-sat çifti ile al-sat yapın. Tüm merkeziyetsiz varlıklarınızı tek bir yerde düzenlemek için Web3 cüzdanınızı bağlayarak DeFi (Merkeziyetsiz Finans) portföyünüzü yönetebilirsiniz. NFT piyasasında çeşitli NFT’ler oluşturabilir, satın alabilir veya satabilirsiniz. DeFi (Merkeziyetsiz Finans) ve blok zinciri oyun DApp’leri dahil en iyi merkeziyetsiz uygulamaları keşfedebilirsiniz. Uygulamamız veya tarayıcı uzantımız aracılığıyla Web3 cüzdanımızla DeFi’a (Merkeziyetsiz Finans) bağlanabilirsiniz. Madencilik havuzlarımızda kripto kazanabilir,kripto teminatlı krediler alabilir ve OKX Earn ile kriptonuzu çoğaltmanın diğer yollarını keşfedebilirsiniz. Dünyaca ünlü TradingView Platformu’na bağlanarak platformun son derece detaylı grafikleriyle kripto alıp satabilirsiniz."} />
        <Accordion title={"OKX'te nasıl Bitcoin satın alırım?"} answer={"GBP, EUR, USD veya yerel para biriminizle dakikalar içinde kolayca Bitcoin satın alı. OKX; Visa, Mastercard ve ApplePay kredi kartları da dahil olmak üzere çeşitli popüler ödeme yöntemlerini destekler. Başlamak için OKX ile Bitcoin satın alma hakkındaki en son kılavuzumuza göz atın. Kripto ekosisteminde ilgi çeken diğer coin’leri alıp satmak veya elinizde tutmak mı istiyorsunuz? Yolculuğunuza hemen başlamak için aşağıdaki ücretsiz kaynaklara göz atın:"} />
        <Accordion title={"OKX nerede kuruldu?"} answer={"2017 yılında kurulan OKX, yeni nesil finansal ekosistemi inşa etmek için blok zinciri teknolojisini benimseyen Seyşeller’de kayıtlı bir kripto para borsasıdır ve yüzlerce kripto para için çeşitli işlem türleri sunar."} />
        <Accordion title={"ABD vatandaşları OKX'i kullanabilir mi?"} answer={"OKX Amerika Birleşik Devletleri’ndeki müşterilere hizmet verememektedir. Platformumuz şu yargı bölgeleri dışında küresel çapta hizmet sağlar: Amerika Birleşik Devletleri, Belçika, Küba, Fransa, İran, Japonya, Kuzey Kore, Kırım, Malezya, Suriye, Bahamalar, Kanada, Hollanda, İrlanda, Bangladeş, Bolivya, Donetsk, Luhansk ve Malta. Tüm ayrıntılar için Hizmet Şartlarımızı görüntüleyin"} />
        <Accordion title={"Kripto Nedir?"} answer={"Kripto para blok zinciri teknolojisi üzerinde çalışan merkeziyetsiz dijital para birimidir. Temel özellikleri arasında şeffaflık, sınırsız işlemler ve değişmezlik yer alır. Piyasa değerine göre en popüler kripto paralardan bazıları Bitcoin, Ethereum ve Tether’dir ve OKX’te bunların hepsini al-sat yapmak mümkündür."} />
        <Accordion title={"OKX'te kripto al-sat işlemleri nasıl yapılır?"} answer={"OKX kullanıcıları Bitcoin, Ethereum ve diğer kripto paralarda işlem yapmak için Spot, Vadeli İşlemler, Marjin ve Opsiyonlar işlemleri gibi çeşitli seçeneklerden yararlanabilirler! OKX’te al-sat stratejilerinizin bir parçası olarak Al-sat botları ve copy trade işlemlerinden de yararlanabilirsiniz."} />
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default HomePage;
