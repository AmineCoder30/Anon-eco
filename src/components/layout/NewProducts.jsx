import React from "react";
import NewProductCard from "../ui/NewProductCard";
import { products } from "../../constants/NewProductsList";
function NewProducts() {
  return (
    <div className=" ">
      <h3 className="border-b border-gray-200 pb-2 my-6 font-medium text-xl capitalize">
        New Products
      </h3>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((item) => (
          <NewProductCard product={item} />
        ))}
      </div>
    </div>
  );
}

export default NewProducts;
