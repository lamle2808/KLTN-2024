import { useState } from "react";
import "./navbarAd.scss";


export default function NavbarAd() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <div className="left">
            <a href="/" className="logo">
              <img src="/logo.png" alt="" />
              <span>EVENTEASE</span>
            </a>
            <a href="/">Event Management</a>
            <a href="/admin/user">User Management</a>
            <a href="/admin/order">Order Management</a>
            <a href="/">Reporting and Analytics</a>
          </div>
          <div className="right">
            
              <div className="user">
                <img
                  src="https://images.pexels.com/photos/13969614/pexels-photo-13969614.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt=""
                />
                <span className="profile">ADMIN</span>                
              </div>
            
            <div className="menuIcon">
              <img
                src="/menu.png"
                alt=""
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
            <div className={open ? "menu active" : "menu"}>
              <a href="/">Event Management</a>
              <a href="/">User Management</a>
              <a href="/">Order Management</a>
              <a href="/">Reporting and Analytics</a>
            </div>
          </div>
      </>
    );
}
