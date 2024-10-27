import PropTypes from "prop-types";
import "./OrderDetail.scss";

export default function OrderDetail({ order }) {
  return (
    <div className="orderDetail">
      <div className="header">
        <h1>Order Details</h1>
        <div className="orderInfo">
          <p className="orderID">Order ID: {order.id}</p>
          <p
            className={`status ${order.status[
              order.status.length - 1
            ].toLowerCase()}`}
          >
            {order.status[order.status.length - 1]}
          </p>
        </div>
      </div>

      <div className="textContainer">
      <div className="venueInfo">
          <h3>Venue Information</h3>
          <p><strong>Venue:</strong> {order.venue}</p>
          <p><strong>Guest Count:</strong> {order.guestCount}</p>
          <p><strong>Total Cost:</strong> {order.totalCost.toLocaleString()} VND</p>
        </div>
        <div className="customerInfo">
          <h3>Customer Information</h3>
          <p><strong>Customer Name:</strong> {order.customerName}</p>
          <p><strong>Event Date:</strong> {order.eventDate}</p>
          <p><strong>Booking Date:</strong> {order.bookingDate}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <p><strong>Notes:</strong> {order.notes}</p>

          {/* Thêm phần Review */}
          {order.review && (
            <div className="reviewSection">
              <h4>Review</h4>
              <p>{order.review}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

OrderDetail.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      customerName: PropTypes.string,
      review: PropTypes.string,
      eventDate: PropTypes.string,
      venue: PropTypes.string,
      guestCount: PropTypes.number,
      totalCost: PropTypes.number,
      bookingDate: PropTypes.string,
      status: PropTypes.arrayOf(PropTypes.string),
      img: PropTypes.string,
      notes: PropTypes.string,
      paymentMethod: PropTypes.string,
  }).isRequired,
};
