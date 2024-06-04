import React from "react";
import logo from "../../assets/images/footer-logo.png";
import img1 from "../../assets/images/master card.png";
import img2 from "../../assets/images/visa.png";
import img3 from "../../assets/images/mir.png";
import img4 from "../../assets/images/maestro.png";
import img5 from "../../assets/images/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__content">
          <div className="footer__wrapper">
            <ul>
              <li>
                <img src={logo} alt="" />
              </li>
              <li>
                <p>
                  Одежда и постель из натуральной шерсти мериноса, ламы,
                  кашемира, верблюда
                </p>
              </li>
              <li>
                <p>© 2021 LanaLux. Все права защищены.</p>
              </li>
            </ul>
            <ul>
              <h3>Виды шерсти</h3>
              <li>
                <Link to={"#"}>Шерсть мериноса</Link>
              </li>
              <li>
                <Link to={"#"}>Шерсть ламы-альпаки</Link>
              </li>
              <li>
                <Link to={"#"}>Шерсть верблюда</Link>
              </li>
              <li>
                <Link to={"#"}>Кашемир</Link>
              </li>
            </ul>
            <ul>
              <h3>для клиентов</h3>
              <li>
                <Link to={"#"}>Доставка и оплата</Link>
              </li>
              <li>
                <Link to={"#"}>Обмен и возврат</Link>
              </li>
              <li>
                <Link to={"#"}>Размеры</Link>
              </li>
              <li>
                <Link to={"#"}>Акции</Link>
              </li>
            </ul>
            <ul>
              <h3>Наши контакты</h3>
              <li>
                <Link to={"#"}>+7 (495) 508-76-45</Link>
              </li>
              <li>
                <Link to={"#"}>lanalux@lanalux.ru </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Россия, Москва, ул. Домодедовская д. 24, корпус 3
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__line"></div>
          <div className="footer__bottom">
            <h3>Договор оферта</h3>
            <h3>Политика в отношении обработки персональных данных</h3>
            <div className="imag">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
