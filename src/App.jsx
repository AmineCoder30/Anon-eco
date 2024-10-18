import "./App.css";
import Header from "./components/layout/Header";
import Suggestions from "./components/layout/Suggestions";
import ProductContainer from "./components/layout/ProductContainer";
import TestimonialAndSevices from "./components/layout/TestimonialAndSevices";
import Blog from "./components/layout/Blog";
import Footer from "./components/layout/Footer";
import MenuSideBar from "./components/layout/MenuSideBar";
import React, { createContext, useReducer } from "react";

//initialstate
const initialState = {
  showMenu: false,
  showCategories: false,
};
//create context
export const Context = createContext();

// Reducer function
const reducer = (state, action) => {
  switch (action) {
    case "SHOW_MENU":
      return {
        ...state,
        showMenu: true,
      };
    case "HIDE_MENU":
      return {
        ...state,
        showMenu: false,
      };
    case "SHOW_CATEGORIES":
      return {
        ...state,
        showCategories: true,
      };
    case "HIDE_CATEGORIES":
      return {
        ...state,
        showCategories: false,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="relative">
      <Context.Provider value={{ state, dispatch }}>
        <Header></Header>
        <Suggestions></Suggestions>
        <ProductContainer />
        <TestimonialAndSevices />
        <Blog />
        <MenuSideBar />
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
