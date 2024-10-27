import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import NavbarAd from "../../admin/components/navbar/NavbarAd";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  const admin = false;

  return (
    <nav>
      {admin ? (
      
        <NavbarAd />
      ) : (
        <>
          <div className="left">
            <a href="/" className="logo">
              <img src="/logo.png" alt="" />
              <span>EVENTEASE</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
          </div>
          <div className="right">
            {user ? (
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/13969614/pexels-photo-13969614.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
                <span>John Doe</span>
                <Link to="/profile" className="profile">
                  <div className="notification">3</div>
                  <span>Profile</span>
                </Link>
              </div>
            ) : (
              <>
                <a href="/login">Sign In</a>
                <a href="/signup" className="register">
                  Sign Up
                </a>
              </>
            )}
            <div className="menuIcon">
              <img
                src="/menu.png"
                alt=""
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
            <div className={open ? "menu active" : "menu"}>
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Sign In</a>
              <a href="/">Sign up</a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
