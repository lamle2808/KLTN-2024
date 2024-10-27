import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
function homePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="tittle">Your Events, Made Easy</h1>
          <p>
            At EventEase, we believe event planning should be simple and
            stress-free. Whether you are organizing a corporate meeting,
            wedding, or private party, our platform makes booking venues and
            managing event details effortless.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
                <h1>500+</h1>
                <h2>Premium Venues</h2>
            </div>
            <div className="box">
                <h1>5</h1>
                <h2>Minutes Seamless Booking</h2>
            </div>
            <div className="box">
                <h1>1,000+</h1>
                <h2>Satisfied clients</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default homePage;
