import "./servicePage.scss";
import ServiceSelection from "../../components/serviceSelection/ServiceSelection";
import { singlePostData } from "../../lib/venue_data_20";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import Map from "../../components/map/Map";
import { useNavigate } from "react-router-dom";

export default function ServicePage() {
  const navigate = useNavigate();
  const handleNext = () => {
    console.log("Next button clicked");
    navigate("/payment");
  };

  return (
    <div className="servicePage">
      <div className="serviceSelection">
        <ServiceSelection />
      </div>
      <div className="summaryContent">
        <h1 className="title">{singlePostData.title}</h1>
        
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{singlePostData.address}</span>
        </div>
        
        <div className="rating">
          {singlePostData.rating}
          <FontAwesomeIcon icon={faStar} />
        </div>
        
        <div className="price">{singlePostData.price.toLocaleString()} VND</div>
        
        <p className="description">{singlePostData.description}</p>
        
        <div className="mapContainer">
          <Map items={singlePostData} />
        </div>
        <button className="nextButton" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
