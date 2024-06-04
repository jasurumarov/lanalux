import React from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import img1 from "../../assets/images/category.png";
import img2 from "../../assets/images/category-2.png";
import img3 from "../../assets/images/category-3.png";
import img4 from "../../assets/images/category-4.png";
import img5 from "../../assets/images/category-5.png";
import img6 from "../../assets/images/category-6.png";
import img7 from "../../assets/images/category-7.png";
import img8 from "../../assets/images/category-8.png";
import { useGetCategoryProductsQuery } from "../../context/api/productsApi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const { data } = useGetCategoryProductsQuery();
  return (
    <div className="category-section-r">
      <div className="container">
        <h3>Каталог</h3>
        <div className="category__wrapper-r">
          <div className="category__card-r">
            <div className="category__line-r">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img1} alt="" />
            </div>
            <div className="div"></div>
            <div className="category__items-r">
              <div className="category-line-r">
                {data?.slice(0, 6)?.map((el, inx) => (
                  <>
                    <Link to={`/category/${el}`} key={inx}>
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                    <span>|</span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="category__card-r">
            <div className="category__line-r">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img2} alt="" />
            </div>
            <div className="div"></div>
            <div className="category__items-r category__items-r-2">
              <div className="category-line-r">
                {data?.slice(0, 6)?.map((el, inx) => (
                  <>
                    <Link to={`/category/${el}`} key={inx}>
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                    <span>|</span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="category__card-r">
            <div className="category__line-r">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img3} alt="" />
            </div>
            <div className="div"></div>
            <div className="category__items-r category__items-r-3">
              <div className="category-line-r">
                {data?.slice(0, 6)?.map((el, inx) => (
                  <>
                    <Link to={`/category/${el}`} key={inx}>
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                    <span>|</span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="category__card-r">
            <div className="category__line-r">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img4} alt="" />
            </div>
            <div className="div"></div>
            <div className="category__items-r category__items-r-4">
              <div className="category-line-r">
                {data?.slice(0, 6)?.map((el, inx) => (
                  <>
                    <Link to={`/category/${el}`} key={inx}>
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                    <span>|</span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="category__card-r">
            <div className="category__line-r">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img5} alt="" />
            </div>
            <div className="div"></div>
            <div className="category__items-r category__items-r-2 category__items-r-5">
              <div className="category-line-r">
                {data?.slice(0, 6)?.map((el, inx) => (
                  <>
                    <Link to={`/category/${el}`} key={inx}>
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                    <span>|</span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="category__card-r">
            <div className="category__line-r">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img6} alt="" />
            </div>
            <div className="div"></div>
            <div className="category__items-r category__items-r-3 category__items-r-4">
              <div className="category-line-r">
                {data?.slice(0, 6)?.map((el, inx) => (
                  <>
                    <Link to={`/category/${el}`} key={inx}>
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                    <span>|</span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="category__card-r">
            <div className="category__line-r">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img7} alt="" />
            </div>
            <div className="div"></div>
            <div className="category__items-r">
              <div className="category-line-r">
                {data?.slice(0, 6)?.map((el, inx) => (
                  <>
                    <Link to={`/category/${el}`} key={inx}>
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                    <span>|</span>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="category__card-r">
            <div className="category__line-r">
              <h3>
                Домашняя <br /> одежда
              </h3>
              <p>633 товара</p>
              <button>
                показать подразделы <HiOutlineArrowNarrowDown />
              </button>
              <img src={img8} alt="" />
            </div>
            <div className="div"></div>
            <div className="category__items-r category__items-r-2">
              <div className="category-line-r">
                {data?.slice(0, 6)?.map((el, inx) => (
                  <>
                    <Link to={`/category/${el}`} key={inx}>
                      {el[0].toUpperCase() + el.slice(1)}
                    </Link>
                    <span>|</span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
