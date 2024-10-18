import React, { useContext } from "react";
import CategoriesSideBar from "../ui/CategoriesSideBar";
import ProductMinimal from "./ProductMinimal";
import TodayDeal from "./TodayDeal";
import NewProducts from "./NewProducts";
import { Context } from "../../App";

function ProductContainer() {
  const { state, dispatch } = useContext(Context);
  const handleHideAllSideBars = () => {
    dispatch("HIDE_MENU");
    dispatch("HIDE_CATEGORIES");
  };
  return (
    <div className="container  mx-auto flex gap-5 ">
      <div
        onClick={handleHideAllSideBars}
        className={`w-full h-full fixed top-0 left-0 bg-[#00000025] z-50 duration-300        ${
          state.showCategories || state.showMenu
            ? " opacity-100"
            : " opacity-0 hidden"
        }  `}
      ></div>
      <CategoriesSideBar />
      <div className="cont_w flex flex-col">
        <ProductMinimal />
        <TodayDeal />
        <NewProducts />
      </div>
    </div>
  );
}

export default ProductContainer;
