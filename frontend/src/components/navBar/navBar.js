import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div className="navBarLeft">
        <span className="logo">Panchayat 🏡</span>
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
