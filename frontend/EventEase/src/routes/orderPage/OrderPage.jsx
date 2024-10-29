import React, { useState } from "react";
import "./orderPage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { orderData } from "../../lib/venue_data_20";
import Order from "../../components/order/Order";
import OrderDetail from "../../components/orderDetail/OrderDetail";

export default function OrderPage() {
  const data = orderData;
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };


  return (
    <div className="orderPage">
      <div className="orderList">
        <form>
          <input type="text" name="orderId" placeholder="" />
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              className="FontAwesomeIcon"
            />
          </button>
        </form>
        <div className="wrapper">
          {data.map((order) => (
            <div key={order.id} onClick={() => handleOrderClick(order)}>
            <Order key={order.id} item={order} />
            </div>    
          ))}
        </div>
      </div>
      <div className="orderDetails">
      {selectedOrder && <OrderDetail order={selectedOrder} />}
      </div>
    </div>
  );
}
