import "./App.css";
import Header from "./components/header";
import Filter from "./components/filter";
import Menu from "./components/menu";
import Order from "./components/order";
import categories from "./data/categories";
import menu from "./data/menu";
import React, { useState } from "react";

function App() {
  const [menuList, setMenuList] = useState(menu);
  const [categoriesList, setCategoriesList] = useState(categories);
  const [orderList, setOrderList] = useState([]);
  return (
    <div className="App">
      <Header />
      <Filter categoriesList={categoriesList} />
      <Menu
        menuList={menu}
        categoriesList={categoriesList}
        setOrderList={setOrderList}
        orderList={orderList}
      />
      <Order
        orderList={orderList}
        menuList={menuList}
        categoriesList={categoriesList}
      />
    </div>
  );
}

export default App;
