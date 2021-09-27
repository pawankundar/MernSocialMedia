import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import "./navBar.css";

const NavBar = () => {

  const ImageLink = process.env.REACT_APP_PUBLIC_FOLDER;
  const { dispatch, user } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navBarContainer">
      <div className="navBarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Panchayat 🏡</span>
        </Link>
      </div>
      <div className="navBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Homepage</span>
          <span className="navBarLink" onClick={handleLogout}>
            Logout
          </span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIconItem">
            <Person />
            <span className="iconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <Chat />
            <span className="iconBadge">1</span>
          </div>
          <div className="navBarIconItem">
            <Notifications />
            <span className="iconBadge">1</span>
          </div>
        </div>
      <Link to={"/profile/"+user.username}>
        <img
          classname="profilePic"
          src={user.profilePicture?ImageLink+user.profilePicture:ImageLink+"/person/no-avatar.png"}
          alt="profilepicture"
          className="profilePic"
        />
      </Link>
      </div>
    </div>
  );
};

export default NavBar;
