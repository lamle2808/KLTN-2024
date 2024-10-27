import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './OrderManagement.scss';
import OrderCard from "../../components/orderCard/OrderCard";

import  {orderData}  from "../../../lib/venue_data_20";
import { useState } from "react";
import OrderDetail from "../../components/orderDetail/OrderDetail";

export default function OrderManagement() {
  const data = orderData;
  
  const [selectedOrder, setSelectedOrder] = useState(null); 


  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };
  return (
    <div className="orderManagement">
      <div className="listContainer">
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
              <OrderCard item={order} />  
            </div>
          ))}
        </div>
      </div>
      <div className="detailsOrder">
        {selectedOrder && <OrderDetail order={selectedOrder} />}
      </div>
    </div>
  );
}
