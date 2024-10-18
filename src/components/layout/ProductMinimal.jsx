import React from "react";
import ProductMinimalItem from "../ui/ProductMinimalItem";
import { arrivals } from "../../constants/arrivals";
import { trendingList } from "../../constants/trendingList";
import { topRated } from "../../constants/topRated";
function ProductMinimal() {
  return (
    <div className=" flex justify-center flex-wrap flex-grow  w-full ">
      <ProductMinimalItem list={arrivals} title="new arrivals" />
      <ProductMinimalItem list={trendingList} title="trending" />
      <ProductMinimalItem list={topRated} title="top rated" />
    </div>
  );
}

export default ProductMinimal;
