import { useEffect, useRef } from "react";
import homeIcon from "../assets/icons/home-icon1.svg"; 
import mainbg from "../assets/images/main-bg.png"; 
import g1 from "../assets/images/g-1.png"; 
import g2 from "../assets/images/g-2.png"; 
import g3 from "../assets/images/g-3.png"; 
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const gimgRef = useRef(null);

  useEffect(() => {
    const container = gimgRef.current;
    const imgs = container.querySelectorAll("img");
    let index = 0;

    // 초기 상태: 첫 이미지 보이게
    imgs.forEach((img, i) => {
      img.style.opacity = i === 0 ? "1" : "0";
      img.style.transition = "opacity 0.8s ease-in-out"; // 부드럽게
    });

    // 🔹 자동 슬라이드 시작
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % imgs.length;
      imgs[index].style.opacity = 0;       // 현재 이미지 사라짐
      imgs[nextIndex].style.opacity = 1;   // 다음 이미지 나타남
      index = nextIndex;
    }, 2000); // 2초마다 전환

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

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
          </div>
        </nav>
      </div>

      <div className="bg-swing">
        <Link to="/why" className="why-link">
          <p>디자인 선정 이유→</p>
        </Link>
        <img src={mainbg} alt="bg" className="bg"/>

        {/* 🔹 gimg 자동 슬라이드 */}
        <div className="gimg" ref={gimgRef}>
          <img src={g1} alt="유치원" className="g"/>
          <img src={g2} alt="고등학생" className="g"/>
          <img src={g3} alt="성인" className="g"/>
        </div>
      </div>
    </div>
  );
}

export default Home;


