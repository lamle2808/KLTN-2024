import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

import "./pin.scss";
import { Link } from "react-router-dom";
export default function Pin({ item }) {
  return (
    <Marker position={[item.coordinates.latitude, item.coordinates.longitude]}>
      <Popup>
      <div className="popupContainer">
        <img src={item.img} />
        <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.capacity} guests</span>
            <b>{item.price} VND</b>
        </div>
      </div>
      </Popup>
    </Marker>
  );
}

Pin.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    capacity: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};
