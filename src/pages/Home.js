import homeIcon from "../assets/icons/home-icon1.svg"; 
import mainbg from "../assets/images/main-bg.png"; 
import swing from "../assets/images/top-img.png"; 
import "./Home.scss";

const Home = () => {
  return (
    <div className="full">
      <div className="top">
        <nav className="navbar">
          <div className="logo">Choi-eunji</div>
          <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className="nav-icon">
            <img src={homeIcon} alt="icon" className="header-icon"/>
          </div>
        </nav>
      </div>

      <div className="bg-swing">
        <img src={mainbg} alt="bg" className="bg"/>
        <img src={swing} alt="swing" className="top-swing"/>
      </div>
    </div>
  );
}

export default Home;

