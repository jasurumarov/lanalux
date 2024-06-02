import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import img from "../../assets/images/category.png";

const Category = () => {
  return (
    <div className="category-section">
      <div className="container">
        <div className="category__wrapper">
          <div className="category__card">
            <div className="category__line">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
