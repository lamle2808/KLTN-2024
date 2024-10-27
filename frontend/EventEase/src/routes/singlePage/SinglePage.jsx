import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import { singlePostData, userData } from "../../lib/venue_data_20";
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
import { useNavigate } from "react-router-dom";
export default function SinglePage() {

  const navigate = useNavigate();
  const handleSelect = () => {
    navigate("/service");
  };

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="rating">
                  {singlePostData.rating}
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="price">{singlePostData.price} VND</div>
              </div>
              <div className="user">
                <img src={userData[1].img} alt="" />
                <span>{userData[1].name}</span>
              </div>
            </div>
            <div className="description">{singlePostData.description}</div>
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
                <p>{singlePostData.size} m2</p>
              </div>
            </div>
            <div className="area">
              <FontAwesomeIcon icon={faUser} size="xl" />
              <div className="areaText">
                <span>Capacity</span>
                <p>{singlePostData.capacity} guests</p>
              </div>
            </div>
            <div className="area">
              <FontAwesomeIcon icon={faPersonShelter} size="xl" />
              <div className="areaText">
                <span>Spaces</span>
                <p>{singlePostData.placeType}</p>
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
            <Map items={singlePostData} />
          </div>
          <div className="buttons">
            <button>
              <FontAwesomeIcon icon={faComment} className="fontAwesomeIcon" />
              Send a Message
            </button>
            <button>
              <FontAwesomeIcon icon={faTag} className="fontAwesomeIcon" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
