import React, { useEffect } from "react";
import Sheep from "../../assets/images/sheep.svg";
import Lod from "../../assets/images/lod.svg";
import Camel from "../../assets/images/camel.svg";
import { useParams } from "react-router-dom";

const AboutContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about_box">
            <h1 className="about_name">О шерсти мериноса</h1>
            <div className="bg_color"></div>
            <div className="about_pars">
              <p>
                С древнейших времён и по сей день меринос является одним
                из самых известных и популярных видов шерсти. В отношении
                качества шерсти, мериноса не может превзойти ни одна другая
                порода овец, а именно овцой является этот обладатель роскошной
                тонкорунной шерсти.
              </p>
              <p>
                К концу 16 века Испания уже была признанным лидером в разведении
                мериносовых овец. Более того, она была монополистом в этой
                отрасли: вплоть до того момента, когда испанская морская армада
                не потерпела поражение от Англии. Однако только спустя две сотни
                лет после вывоза мериносов из поражённой державы, англичане
                смогли добиться успехов в овцеводстве, сравнимых с Испанией.
              </p>
              <p>
                В 18 веке мериносы были завезены в Австралию, где условия
                для их разведения оказались идеальными, и с этого момента именно
                она стала главным поставщиком шерсти в страны Европы.
              </p>
              <p>
                {" "}
                Секрет мериносовой шерсти — очень тонкое волокно, позволяющее
                животным противостоять суровому климату и колебаниям температуры
                от очень низких зимних до экстремально высоких летних.
                Для производства изделий из мериноса состригается шерсть
                исключительно с холки животных.
              </p>
            </div>
            <div className="about_images">
              {new Array(3).fill("").map((_, inx) => {
                if (id === "1") {
                  return <img key={inx} src={Sheep} alt="Img" />;
                }
                if (id === "2") {
                  return <img key={inx} src={Sheep} alt="Img" />;
                }
                if (id === "3") {
                  return <img key={inx} src={Sheep} alt="Img" />;
                }
                if (id === "4") {
                  return <img key={inx} src={Sheep} alt="Img" />;
                }
              })}
            </div>

            <div className="bg_color"></div>
            <h1 className="about_name">О шерсти мериноса</h1>
            <div className="about_pars line">
              <p>
                Мериносовая шерсть длинная, мягкая и эластичная, способна долгое
                время держать объём и форму, а благодаря естественному завитку
                отличается особой упругостью. Эта шерсть обладает природной
                белизной с гармоничной палитрой цветовых нюансов.
              </p>
              <p>
                Шерсть мериноса отличает высокая гигроскопичность, она способна
                впитывать до 33% влаги от своего объёма, благодаря чему тело
                человека всегда остаётся в сухом тепле. В волокнах шерсти —
                миллионы воздушных подушечек, способствующих сохранению тепла
                и в холод, и в жару.
              </p>
              <p>
                Меринос является идеальным материалом для детской одежды, т.к.
                не раздражает кожу.
              </p>
              <p>
                {" "}
                Все эти качества делают шерсть мериноса не только незаменимой
                в любой одежде, от повседневной до спортивной, но и служат
                залогом крепкого, здорового сна
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
