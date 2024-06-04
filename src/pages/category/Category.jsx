import React, { useEffect } from "react";
import CategoryContent from "../../components/categoryContent/CategoryContent";
import { useParams } from "react-router-dom";
import { useGetCategoryItemQuery } from "../../context/api/productsApi";

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { path } = useParams();
  const { data, isLoading } = useGetCategoryItemQuery(path);
  return (
    <main className="category-page">
      <CategoryContent data={data?.products} isLoading={isLoading}/>
    </main>
  );
};

export default Category;
