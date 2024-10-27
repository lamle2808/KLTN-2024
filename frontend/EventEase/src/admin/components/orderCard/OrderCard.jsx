import PropTypes from "prop-types";

import "./OrderCard.scss";

export default function OrderCard({ item }) {
  return (
    <div className="orderCard">
      <div className="imageContainer">
        <img src={item.img} alt={item.venue} />
      </div>

      <div className="textContainer">
        <h2 className="eventVenue">{item.venue}</h2>
        <span>{item.status[item.status.length - 1]}</span>
        <div className="detailsContainer">
          <div className="left">
            <p className="eventDate">Date: {item.eventDate}</p>
            <p className="guestCount">Guests: {item.guestCount}</p>
            <p className="totalCost">
              Total Cost: {item.totalCost.toLocaleString()} VND
            </p>
          </div>
          <div className="right">
            <p className="customerName">Customer: {item.customerName}</p>
            <p className="bookingDate">Booking Date: {item.bookingDate}</p>
            <p className="paymentMethod">Payment: {item.paymentMethod}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    customerName: PropTypes.string,
    eventName: PropTypes.string,
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
