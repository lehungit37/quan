import React from "react";
import "./style.css";

const Menu = (props) => {
  const { menuList, categoriesList, setOrderList, orderList } = props;

  const getNameCategories = (id) => {
    console.log(id);
    const category = categoriesList.find((item) => item.id === id);
    return category.name;
  };

  const addToCart = (item) => {
    const cloneOrderList = [...orderList];
    const itemOrderIndex = cloneOrderList.findIndex((e) => e.id === item.id);
    if (itemOrderIndex !== -1) {
      cloneOrderList.splice(itemOrderIndex, 1,{
        ...item,
        count: cloneOrderList[itemOrderIndex].count + 1,
      });
    } else {
      cloneOrderList.push({
        ...item,
        count: 1,
      });
    }
    setOrderList(cloneOrderList);
  };
  return (
    <div className="menu">
      <h2>1. Menu</h2>
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>categories</th>
          <th>Price</th>
          <th></th>
        </tr>
        {menuList?.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{getNameCategories(item.categoriesId)}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => addToCart(item)}>
                  <i class="fas fa-plus"></i>
                  Add to Order
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Menu;
