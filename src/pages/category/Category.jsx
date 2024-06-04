import React from "react";
import CategoryContent from "../../components/categoryContent/CategoryContent";
import { useParams } from "react-router-dom";
import { useGetCategoryItemQuery } from "../../context/api/productsApi";

const Category = () => {
  const { path } = useParams();
  console.log(path);
  const { data } = useGetCategoryItemQuery(path);
  // 'https://dummyjson.com/products/categories'
  return (
    <main className="category-page">
      <CategoryContent data={data?.products} />
    </main>
  );
};

export default Category;
