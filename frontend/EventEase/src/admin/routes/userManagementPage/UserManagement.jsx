import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./userManagement.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { userData } from "../../../lib/venue_data_20";
import UserCard from "../../components/userCard/UserCard";
import UserDetail from "../../components/userDetail/userDetail";
import { useState } from "react";

export default function UserManagement() {
  const data = userData;

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="userManagement">
      <div className="listUser">
        <form>
          <input type="text" name="username" placeholder="Username" />
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="xl"
              className="FontAwesomeIcon"
            />
          </button>
        </form>
        <div className="wrapper">
          {data.map((item) => (
            <div key={item.id} onClick={() => handleUserClick(item)}>
              <UserCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="detailsUser">
        {selectedUser && <UserDetail user={selectedUser} />}
      </div>
    </div>
  );
}
