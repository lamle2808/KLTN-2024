import Slider from "../../components/slider/Slider";
import PropTypes from "prop-types";
import "./singlePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faComment,
  faTag,
  faPersonShelter,
  faArrowUpRightFromSquare,
  faUser,
  faWifi,
  faSquareParking,
  faWind,
  faUtensils,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import Map from "../../components/map/Map";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SinglePage() {
  const location = useLocation();
  const venue = location.state?.venue;

  const navigate = useNavigate();
  const handleSelect = () => {
    navigate("/service", { state: { venue } });
  };

  const [isChatVisible, setIsChatVisible] = useState(false);
  const toggleChat = () => {
    setIsChatVisible((prev) => !prev); // Toggle chat visibility
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={venue.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{venue.title}</h1>
                <div className="address">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{venue.address}</span>
                </div>
                <div className="rating">
                  {venue.rating}
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="price">{venue.price} VND</div>
              </div>
              <div className="user">
                <img src={venue.author.img} alt="" />
                <span>{venue.author.name}</span>
              </div>
            </div>
            <div className="description">{venue.description}</div>
            <div className="bottom">
              <button onClick={handleSelect}>Select</button>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">Space and Capacity</p>
          <div className="listVertical">
            <div className="area">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xl" />
              <div className="areaText">
                <span>Size</span>
                <p>{venue.size} m2</p>
              </div>
            </div>
            <div className="area">
              <FontAwesomeIcon icon={faUser} size="xl" />
              <div className="areaText">
                <span>Capacity</span>
                <p>{venue.capacity} guests</p>
              </div>
            </div>
            <div className="area">
              <FontAwesomeIcon icon={faPersonShelter} size="xl" />
              <div className="areaText">
                <span>Spaces</span>
                <p>{venue.placeType}</p>
              </div>
            </div>
          </div>

          <p className="title">Facilities and Services</p>
          <div className="services">
            <div className="service">
              <FontAwesomeIcon icon={faWifi} />
              <span>Free Wifi</span>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faSquareParking} />
              <span>Parking</span>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faUtensils} />
              <span>Catering</span>
            </div>

            <div className="services">
              <div className="service">
                <FontAwesomeIcon icon={faWind} />
                <span>Air Conditioner</span>
              </div>
            </div>

            <div className="service">
              <FontAwesomeIcon icon={faVolumeHigh} />
              <span>Sound System</span>
            </div>
          </div>

          <p className="title">Type of Event</p>
          <div className="listHorizontal">
            <div className="areaText">
              <span>Wedding</span>
            </div>
            <div className="areaText">
              <span>Party</span>
            </div>
            <div className="areaText">
              <span>Meeting</span>
            </div>
            <div className="areaText">
              <span>Conference</span>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={venue} />
          </div>
          <div className="buttons">
            <button onClick={toggleChat}>
              <FontAwesomeIcon icon={faComment} className="fontAwesomeIcon" />
              Send a Message
            </button>
            <button>
              <FontAwesomeIcon icon={faTag} className="fontAwesomeIcon" />
              Save the Place
            </button>
          </div>
        </div>
        {isChatVisible && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src={venue.author.img}
                alt=""
              />
              {venue.author.name}
            </div>
            <span className="close" onClick={toggleChat}>
              X
            </span>
          </div>
          <div className="center">
            
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
      </div>      
    </div>
  );
}

SinglePage.propTypes = {
  venue: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
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
    services: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number,
        img: PropTypes.string,
      })
    ),
    author: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string,
    }),
  }),
};
