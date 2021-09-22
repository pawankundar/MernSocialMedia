import NavBar from "../../components/navBar/navBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import LeftBar from "../../components/leftBar/LeftBar";
import "./home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="Container">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
