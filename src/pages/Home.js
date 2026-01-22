import { useEffect, useRef } from "react";
import homeIcon from "../assets/icons/home-icon1.svg"; 
import mainbg from "../assets/images/main-bg.png"; 
import g1 from "../assets/images/g-1.png"; 
import g2 from "../assets/images/g-2.png"; 
import g3 from "../assets/images/g-3.png"; 
import tool1 from "../assets/images/tool (1).png"; 
import tool2 from "../assets/images/tool (2).png"; 
import tool3 from "../assets/images/tool (3).png"; 
import tool4 from "../assets/images/tool (4).png"; 
import tool5 from "../assets/images/tool (5).png"; 
import tool6 from "../assets/images/tool (6).png"; 
import tool7 from "../assets/images/tool (7).png"; 
import tool8 from "../assets/images/tool (8).png"; 
import "./Home.scss";
import { Link } from "react-router-dom";

const tools = [tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8];

const Home = () => {
  const gimgRef = useRef(null);
  const toolRef = useRef(null);

  const repeatCount = 4; // 반복 횟수 늘림
  const repeatedTools = Array(repeatCount).fill(tools).flat();

  // 🔹 gimg 슬라이드
  useEffect(() => {
    const container = gimgRef.current;
    const imgs = container.querySelectorAll("img");
    let index = 0;

    imgs.forEach((img, i) => {
      img.style.opacity = i === 0 ? "1" : "0";
      img.style.transition = "opacity 0.8s ease-in-out";
    });

    const interval = setInterval(() => {
      const nextIndex = (index + 1) % imgs.length;
      imgs[index].style.opacity = 0;
      imgs[nextIndex].style.opacity = 1;
      index = nextIndex;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // 🔹 툴 아이콘 무한 슬라이드
  useEffect(() => {
    const inner = toolRef.current;
    let offset = 0;
    const speed = 1; // px/frame 이동 속도
    const totalWidth = inner.scrollWidth / repeatCount; // 1세트 너비

    const scroll = () => {
      offset -= speed;
      if (Math.abs(offset) >= totalWidth) offset = 0; // 무한 루프
      inner.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(scroll);
    };

    const frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, [repeatCount]);

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
          <div className="my">
            <Link to="/about" className="about-link">
              <p>About→</p>
            </Link>
          </div>
        </div>

        {/* 🔹 툴 아이콘 무한 슬라이드 */}
        <div className="tool">
          <div className="tool-inner" ref={toolRef}>
            {repeatedTools.map((tool, idx) => (
              <img key={idx} src={tool} alt={`tool-${idx}`} className="tool-menu"/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
