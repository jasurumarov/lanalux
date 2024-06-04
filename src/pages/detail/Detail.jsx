import React, { useEffect } from "react";
import SingleRoute from "../../components/single-route/SingleRoute";
import Information from "../../components/information";
import { useGetDetailProductQuery } from "../../context/api/productsApi";
import { useParams } from "react-router-dom";
import Products from "../../components/products/Products";
import Loading from "./DetailLoader";

const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { data, isLoading } = useGetDetailProductQuery(id);
  return (
    <>
      <SingleRoute data={data} />
      {isLoading ? <Loading /> : <></>}
      <Information />
      <Products />
    </>
  );
};

export default Detail;
