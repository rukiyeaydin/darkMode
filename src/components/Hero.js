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

const Hero = () => {

  const logosData = [
    { logo: html, text: 'HTML' },
    { logo: css, text: 'CSS' },
    { logo: js, text: 'JAVASCRIPT' },
    { logo: reactimg, text: 'REACT' },
    { logo: tailwind, text: 'TAILWIND' },
    { logo: bootstrap, text: 'BOOTSTRAP' },
    { logo: sass, text: 'SASS' },
    { logo: mysql, text: 'MYSQL' },
    { logo: python, text: 'PYTHON' },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // kullanici, logolarin olduğu sectiona geldiğinde her seferinde animasyon olsun.
    threshold: 0.2,
  });

  const trail = useTrail(logosData.length, {
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translate3d(0, 0, 0)' : 'translate3d(0, 30px, 0)' },
    delay: 200, // The delay between each logo's appearance (2ms in this case)
  });

  return (
    <div className="all">
      <div className="container">
        <div className="hero" style={{animation: "animasyon 3s"}}>
        <h1 className="heroh1">Hello, I'm Rukiye</h1>
        <div className="para">
          <p className="parap">I'm a front-end enthusiast who takes responsive websites. 
            With every project, my goal is to combine creativity and technical expertise to deliver seamless user interfaces that 
            leave a lasting impression on users, ensuring they have an enjoyable and memorable experience while exploring the digital world.
          </p>
        </div>
        <div className="icons">
          <a href="https://github.com/rukiyeaydin" className="github">
            <BsGithub className="githubIcon"/>
            <p className="githubP">rukiyeaydin</p>
          </a>
          <a href="https://www.linkedin.com/in/rukiye-ayd%C4%B1n-015743207/" className="linkedin">
            <AiFillLinkedin className="linkedinIcon"/>
            <p className="linkedinP">Rukiye Aydın</p>
          </a>      
        </div>
        <a href="/Projects" className="prj">My Projects</a>
        </div>
      </div>

      <div className="stacks" ref={ref}>
        <h1 className="text-3xl">MY SKILLS</h1>
        <div className="stacksalt">
        <div className="logos">
          <div className="sec1">
            {trail.slice(0, Math.ceil(logosData.length / 2)).map((styles, index) => (
              <animated.div key={logosData[index].text} style={styles} className="logo">
                <img src={logosData[index].logo} alt="" />
                <p>{logosData[index].text}</p>
              </animated.div>
            ))}
          </div>
          <div className="sec2">
            {trail.slice(Math.ceil(logosData.length / 2)).map((styles, index) => (
              <animated.div key={logosData[index + Math.ceil(logosData.length / 2)].text} style={styles} className="logo">
                <img src={logosData[index + Math.ceil(logosData.length / 2)].logo} alt="" />
                <p>{logosData[index + Math.ceil(logosData.length / 2)].text}</p>
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