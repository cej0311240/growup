import homeIcon from "../assets/icons/home-icon1.svg"; 
import mainbg from "../assets/images/main-bg.png"; 
import swing from "../assets/images/top-img.png"; 
import "./Home.scss";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="full">
      <div className="top">
        <nav className="navbar">
          <div className="logo">Choi-eunji</div>
          <ul className="menu">
            <li><Link to="/" className="menu-link">Home</Link></li>
            <li><Link to="/about" className="menu-link">About</Link></li>
            <li><Link to="/skills" className="menu-link">Skills</Link></li>
            <li><Link to="/projects" className="menu-link">Projects</Link></li>
            <li><Link to="/contact" className="menu-link">Contact</Link></li>
          </ul>
          <div className="nav-icon">
            <img src={homeIcon} alt="icon" className="header-icon"/>
          </div>s
        </nav>
      </div>

      <div className="bg-swing">
        <Link to="/why" className="why-link">
        <p>디자인 선정 이유→</p>
        </Link>
        <img src={mainbg} alt="bg" className="bg"/>
        <img src={swing} alt="swing" className="top-swing"/>
      </div>
    </div>
  );
}

export default Home;

