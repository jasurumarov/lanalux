import React from "react";
import { Link } from "react-router-dom";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { cardItem } from "./static";
import { useNavigate } from "react-router-dom";

const WoolType = () => {
  const navigate = useNavigate();
  const card = cardItem?.map((el) => (
    <div key={el.id} className="wool-type-card">
      <div className="wool-type__line">
        <h3>{el.title}</h3>
        <button onClick={() => navigate(`/about/${el.id}`)}>
          <LiaLongArrowAltRightSolid />
        </button>
      </div>
      <img src={el.url} alt={el.title} className="wool-type__img" />
    </div>
  ));
  return (
    <section className="wool-type-section">
      <div className="container">
        <div className="wool-type__wrapper">{card}</div>
      </div>
    </section>
  );
};

export default WoolType;
