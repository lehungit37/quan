import React from "react";
import "./style.css";

const Order = (props) => {
  const { orderList, categoriesList } = props;

  const getNameCategories = (id) => {
    console.log(id);
    const category = categoriesList.find((item) => item.id === id);
    return category.name;
  };
  const totalOrder =() => {
      let sum = 0;
      orderList?.map((item) => {
          sum += item.count * item.price
      })

      return sum
  }
  return (
    <div className="order">
      <h2>2. Order</h2>
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>categories</th>
          <th>Price</th>
          <th></th>
        </tr>
        {orderList?.map((item, key) => {
          return (
            <tr key={key}>
              <td>{key + 1}</td>
              <td>{item.name}</td>
              <td>{getNameCategories(item.categoriesId)}</td>
              <td>
                {`${item.price} VND`} * <input type ={"number"} value={item.count} /> ={" "}
                {item.price * item.count} VND
              </td>
              <td>
                <button>
                  <i class="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="total">
        <span>Total: {totalOrder()} VND</span>
        <button>Place Order</button>
      </div>
    </div>
  );
};

export default Order;
