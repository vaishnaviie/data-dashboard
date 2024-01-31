import React from "react";
import Searchbar from "./Searchbar";
import BudgetContainer from "./BudgetContainer";
import ProductListing from "./ProductListing";

const MainContainer = () => {
  return (
    <div className=" w-[1116px]">
      <Searchbar />
      <hr />
      <BudgetContainer />
      <ProductListing />
    </div>
  );
};

export default MainContainer;
