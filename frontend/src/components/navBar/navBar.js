import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBarLeft">
        <Link to="/" style={{ textDecoration: 'none' }}>
        <span className="logo">Panchayat 🏡</span>
        </Link>
      </div>
      <div className="navBarCenter">
        <div className="searchBar">
          <Search  className = "searchIcon"/>
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Homepage</span>
          <span className="navBarLink">Timeline</span>
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
  
        <img classname = "profilePic" src="/assets/person/1.jpeg" alt ="profilepicture"  className="profilePic"/>
      </div>
    </div>
  );
};

export default NavBar;
