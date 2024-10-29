import { Link } from "react-router-dom";
import "./card.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faUser,
  faSquareParking,
  faWifi,
  faTag,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
export default function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} state={{venue : item}} className="imageContainer">
        <img src={item.img} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`} state={{venue :  item}} >{item.title}</Link>
        </h2>
        <p className="rating">
          {item.rating}
          <FontAwesomeIcon icon={faStar} className="fontAwesomeIcon" />
        </p>
        <p className="address">
          <FontAwesomeIcon icon={faLocationDot} className="fontAwesomeIcon" />
          <span>{item.address}</span>
        </p>
        <p className="price">{item.price} VND</p>
        <div className="bottom">
          <div className="features">
          <div className="feature">
          <FontAwesomeIcon icon={faUser} />
          <span>{item.capacity} guests</span>
          </div>
            <div className="feature">
              <FontAwesomeIcon icon={faWifi} className="fontAwesomeIcon" />
            </div>
            <div className="feature">
              <FontAwesomeIcon
                icon={faSquareParking}
                className="fontAwesomeIcon"
              />
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <FontAwesomeIcon icon={faTag} className="fontAwesomeIcon" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faComment} className="fontAwesomeIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }).isRequired,
    capacity: PropTypes.number,
    price: PropTypes.number,
    rating: PropTypes.number,
    size: PropTypes.number,
    description: PropTypes.string,
    placeType: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      price: PropTypes.number,
      img: PropTypes.string,
    })), 
  }).isRequired,
};
