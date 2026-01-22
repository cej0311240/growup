// import { useEffect, useRef } from "react";
// import tool1 from "../assets/images/tool-1.png"; 
// import tool2 from "../assets/images/tool-2.png"; 
// import tool3 from "../assets/images/tool-3.png"; 
// import tool4 from "../assets/images/tool-4.png"; 
// import tool5 from "../assets/images/tool-5.png"; 
// import tool6 from "../assets/images/tool-6.png"; 
// import tool7 from "../assets/images/tool-7.png"; 
// import tool8 from "../assets/images/tool-8.png"; 
// import "./Skills.scss";

// const tools = [tool1, tool2, tool3, tool4, tool5, tool6, tool7, tool8];

// const Skills = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     let scrollAmount = 0;

//     const speed = 1; // 속도 조절: 1px씩 스크롤
//     let animationFrameId;

//     const scroll = () => {
//       scrollAmount += speed;

//       if (scrollAmount >= container.scrollWidth / 2) {
//         // 무한 반복을 위해 scrollLeft 초기화
//         scrollAmount = 0;
//       }
//       container.scrollLeft = scrollAmount;

//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     animationFrameId = requestAnimationFrame(scroll);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   // 툴 아이콘을 두 번 렌더링해서 자연스러운 무한 슬라이드 효과 구현
//   const doubledTools = [...tools, ...tools];

//   return (
//     <div className="skills-wrapper" ref={containerRef}>
//       {doubledTools.map((tool, idx) => (
//         <img key={idx} src={tool} alt={`도구-${idx}`} className="tool" />
//       ))}
//     </div>
//   );
// };

// export default Skills;
