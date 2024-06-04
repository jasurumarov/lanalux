import React from "react";
import reklama from "../../assets/images/ads.png";
import { MdOutlinePhone } from "react-icons/md";

import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Maps = () => {
  const { pathname } = useLocation();
  if (pathname.includes("cart")) {
    return <></>;
  }
  return (
    <div className="maps-section">
      <div className="ads">
        <img src={reklama} alt="" />
      </div>
      <div className="container">
        <div className="address">
          <div className="address__line">
            <div className="address__group">
              <span>
                <MdOutlinePhone /> Телефоны
              </span>
              <Link to={`tel: +7 (495) 508-76-45`}>+7 (495) 508-76-45</Link>
              <Link to={`+7 (916) 656-98-60`}>+7 (916) 656-98-60</Link>
            </div>
            <span className="address-r"></span>
            <div className="address__group">
              <span>
                <MdOutlineMarkEmailRead /> E-mail
              </span>
              <Link to={`#`}>lanalux@lanalux.ru</Link>
            </div>
            <span className="address-r"></span>
            <div className="address__group">
              <span>
                <MdOutlineLocationOn /> Адрес
              </span>
              <Link to={`#`}>
                Россия, Москва, ул. Домодедовская д. 24, корпус 3
              </Link>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Najot%20talim+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Maps;
