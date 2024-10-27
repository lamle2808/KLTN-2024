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
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
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
    address: PropTypes.string,
    price: PropTypes.number,
    capacity: PropTypes.number,
    img: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
