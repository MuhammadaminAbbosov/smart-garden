import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  document.title = "Smart Garden | About Us";

  return (
    <Wrapper>
      <b>Biz haqimizda</b>
      <div className="content">
        <div className="images">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
        <p className="text">
          <span> Muammo:</span> O'zbekistonda 18 500 dan ziyod gidro uchastkalar
          va suv taqsimlash punktlari mavjud. Shulardan yiliga 50mlrd m³ suv
          oqib o'tadi. Suvlarning adolatli teng taqsimlanmasligi oqibatida
          barcha yerlarga yetarli miqdorda suv yetib bormaydi. Oqibatda turli
          hududlarda aholi o'rtasida nizolar, kelishmovchiliklar kelib chiqishi
          kuzatilmoqda. <br />
          <br />
          <span>Yechim:</span> "Aqlli suv" qurilmalarini ishlab chiqarish orqali
          Respublikamizda suv sarfini nazorat qilish mumkin. Shuningdek,
          O'zbekiston hududidagi suv sarfini kamaytirish, Orol dengiziga har
          yili 280min m^3 suv quyilish hisobiga uni qayta tiklanishiga yordam
          beradi. <br />
          <br />
          Bundan tashqari, O'zbekistonning katta qismi bo'lgan "Voha" hududida
          suv tanqis joylarga ham suv yetib borishini taminlaydi. <br />
          <br />
          Respublika bo'ylab soy, kanallar va suv omborlarini suv sarfini, suv
          tezligini, o'sha hududda havo haroratini va namligini online rejimda
          bir tizimda kuzatish imkonini beradi.
          <br />
          <br />
          Bu yechim orqali Respublika hududidagi va viloyatlararo umumiy suv
          sarfini bitta maxsus Web sayt orqali kuzatish mumkin.
          <br />
          <br />
          <span>Afzalligi: </span>Bu qurilmani ishga tushirish orqali suv
          taqsimoti tizimlashtiriladi shu bilan birga suv tanqis hududlarga suv
          yetib boradi. Tabiiy suv ko'tarilishlarini "real time" rejimida ko'rib
          turish imkoni bo'ladi. Havo harorati va nisbiy namlik bo'yicha
          viloyatlar va tumanlar kesimida statistika yig'adi.
          <br />
          <br />
          Bugungi kunda bu moslama test rejimida faol ishlamoqda. Hozirda uni
          yanada takomillashtirish ustida ishlar olib borilayapti.
          <br />
          <br />
          Suvni nazorat qiladigan ishlanmaning anologlari AQSh mamlakatida
          mavjud ekan. O'rta Osiyoda esa umuman yo'q. Agarda moslamani olib
          keltirmoqchi bo'lsak, uning tannarxi oshib ketishi muqarrar.
        </p>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
const Wrapper = styled.div`
  padding: 30px;
  b {
    display: block;
    text-align: center;
    font-size: 28px;
    color: #3c7747;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    gap: 30px;

    .images {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .image {
        height: 142px;
        width: 220px;
        background-color: #243b3b;
      }
    }
  }

  .text {
    font-size: 13px;
    letter-spacing: 1px;
    color: #3c7747;

    span {
      font-weight: 600;
    }
  }
`;
