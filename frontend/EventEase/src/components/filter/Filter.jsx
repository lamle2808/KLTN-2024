import "./filter.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
export default function Filter() {
  return (
    <div className="filter">
      <h1>Search result for</h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
        <div className="item">
          <label htmlFor="guest">Guests</label>
          <input type="number" id="guest" name="guest" min={0} max={1000} />
        </div>
        <div className="item">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="wedding">Wedding</option>
            <option value="conference">Conference</option>
            <option value="party">Party</option>
            <option value="">Orther</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="amenity">Amenities</label>
          <p>
            <input type="checkbox" />
            Wifi
          </p>
          <p>
            <input type="checkbox" />
            Parking
          </p>
          <p>
            <input type="checkbox" />
            Sound System
          </p>
        </div>
        <div className="item">
          <label htmlFor="sort">Sort by</label>
          <select name="sortBy">
            <option value="">Select Sort Option</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
        </div>
        <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="FontAwesomeIcon"/>
        </button>
      </div>
    </div>
  );
}
