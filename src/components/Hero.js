import "./HeroStyles.css";
import { BsGithub } from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.jpg";
import bootstrap from "../images/bootstrap.png";
import mysql from "../images/mysql.png";
import python from "../images/python.png";
import sass from "../images/sass.png";
import tailwind from "../images/tailwind.png";
import reactimg from "../images/react.png";
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Lottie from "lottie-react";
import anm from "../assets/anm.json";
import { useDarkMode } from './DarkModeContext';

const Hero = () => {

  const { text,backgroundColor, color, githubColor } = useDarkMode();

  const logosData = [
    { logo: html, text: 'HTML' },
    { logo: css, text: 'CSS' },
    { logo: js, text: 'JAVASCRIPT' },
    { logo: reactimg, text: 'REACT' },
    { logo: tailwind, text: 'TAILWIND' },
    { logo: bootstrap, text: 'BOOTSTRAP' },
    { logo: sass, text: 'SASS' },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // kullanici, logolarin olduğu sectiona geldiğinde her seferinde animasyon olsun.
    threshold: 0.2,
  });

  const trail = useTrail(logosData.length, {
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 30px, 0)' },
    delay: 200,
  });

  return (
    <div className="all items-center content-center text-center">

      <div className="hakkimda">
        <div className="hakkimdahero" >
          <h1 style={{animation: "animasyon 2s"}} className="hello">Hello, I'm Rukiye</h1>
          <p className="pfirst" style={{animation: "animasyon2 1.5s", color: text}} >I enjoy creating responsive websites. 
          My aim for each project is to bring together creativity and technical skills to design user-friendly interfaces 
          that leave a positive impact on users and provide them with an enjoyable and memorable experience in the digital world.
          </p>
          <div className="ikonlar">
            <a href="https://github.com/rukiyeaydin" className="github"  style={{animation: "animasyon3 3s"}}>
              <BsGithub className="githubIcon" style={{ color: githubColor}} />
              <p className="githubP" style={{ color: githubColor}} >rukiyeaydin</p>
            </a>
            <a href="https://www.linkedin.com/in/rukiye-ayd%C4%B1n-015743207/" className="linkedin" style={{animation: "animasyon3 2s"}}>
              <AiFillLinkedin className="linkedinIcon" style={{ color: githubColor}} />
              <p className="linkedinP" style={{ color: githubColor}} >Rukiye Aydın</p>
            </a>
            <a href="/Projects" className="prj" style={{animation: "animasyon3 1s" ,background:githubColor}}><p  style={{color: backgroundColor}}>My Projects</p></a>
          </div>
        </div>
      </div>

      <div className="stacks" ref={ref}>
        <h1 className="skill">Stacks I Use</h1>
        <div className="stacksalt items-center content-center">
        <div className="logos">
          <div className="sec1">
            {trail.slice(0, Math.ceil(logosData.length / 2)).map((styles, index) => (
              <animated.div key={logosData[index].text} style={styles} className="logo">
                <img src={logosData[index].logo} alt="" />
                <p style={{color: color}}>{logosData[index].text}</p>
              </animated.div>
            ))}
          </div>
          <div className="sec2">
            {trail.slice(Math.ceil(logosData.length / 2)).map((styles, index) => (
              <animated.div key={logosData[index + Math.ceil(logosData.length / 2)].text} style={styles} className="logo">
                <img src={logosData[index + Math.ceil(logosData.length / 2)].logo} alt="" />
                <p style={{color: color}}>{logosData[index + Math.ceil(logosData.length / 2)].text}</p>
              </animated.div>
            ))}
          </div>
        </div>
        <Lottie animationData={anm} className="anm"/>
        </div>
      </div>
    </div>
  )
}

export default Hero