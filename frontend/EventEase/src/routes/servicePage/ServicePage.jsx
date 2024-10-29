import "./servicePage.scss";
import ServiceSelection from "../../components/serviceSelection/ServiceSelection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import Map from "../../components/map/Map";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function ServicePage() {

  const location = useLocation();
  const venue = location.state?.venue;

  const [selectedServices, setSelectedServices] = useState([]);

  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/payment", { state: { venue, selectedServices } });
  };

  return (
    <div className="servicePage">
      <div className="serviceSelection">
        <ServiceSelection services={venue.services} onSelectServices={setSelectedServices}/>
      </div>
      <div className="summaryContent">
        <h1 className="title">{venue.title}</h1>
        
        <div className="address">
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{venue.address}</span>
        </div>
        
        <div className="rating">
          {venue.rating}
          <FontAwesomeIcon icon={faStar} />
        </div>
        
        <div className="price">{venue.price.toLocaleString()} VND</div>
        
        <p className="description">{venue.description}</p>
        
        <div className="mapContainer">
          <Map items={venue} />
        </div>
        <button className="nextButton" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
