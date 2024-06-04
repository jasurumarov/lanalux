import React, { useEffect } from "react";
import SingleRoute from "../../components/single-route/SingleRoute";
import Information from "../../components/information";
import { useGetDetailProductQuery } from "../../context/api/productsApi";
import { useParams } from "react-router-dom";

const Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { data } = useGetDetailProductQuery(id);
  return (
    <>
      <SingleRoute data={data} />
      <Information />
    </>
  );
};

export default Detail;
