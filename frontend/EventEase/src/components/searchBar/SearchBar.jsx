import "./searchBar.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {

  const navigate = useNavigate(); // initialize useNavigate

  const handleSearch = (e) => {
    e.preventDefault(); // prevent the default form submission behavior

    // You can collect form data here if needed, and then pass it as query parameters
    const location = e.target.location.value;
    const date = e.target.date.value;
    const members = e.target.members.value;

    // Navigate to the /list page
    // Optionally pass data via query params or state
    navigate(`/list?location=${location}&date=${date}&members=${members}`);
  };
  
  return (
    <div className="searchBar">
      <div className="type">
        <form onSubmit={handleSearch}>
          <input type="text" name="location" placeholder="City Location" />
          <input
            type="date"
            name="date"
            defaultValue={new Date().toISOString().split("T")[0]}
          />
          <input
            type="number"
            name="members"
            min={0}
            max={1000000000}
            placeholder="Guests"
          />

          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="2xl"
              className="FontAwesomeIcon"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
