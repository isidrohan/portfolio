import { useEffect,useState } from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
// import sidimage from "../image/sid.jpeg";
import siddark from "../image/sid2.jpg";
import sidlight from "../image/sidlight.jpg";
import bulb2 from "../image/bulb2.png";
import bulbglow from "../image/bulb glow.png";
import { ReactTyped } from "react-typed";
import { TypeAnimation } from "react-type-animation";
import resume from "../image/RESUME S.pdf";
export const Home = (props) => {
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () =>{
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }
    else{
      setTheme("dark-theme");
    }
  }

  useEffect(() => {
    document.body.className=theme;
  }, [theme])
  
  return (
    <>
      <header ref={props.nameforRef} className="box">
        <div className="box-container grid grid-two-col">
          {/* <div className="box-container-item"> */}
          <div className="item image">
            <div className={theme === 'light-theme' ? 'profile-overlay' : 'profile'}>
              <img src={siddark} alt="sid" height="400" />

            </div>

            <div className="light">
              <img className="bulb" src={theme === 'dark-theme' ? bulbglow : bulb2}  onClick={()=>toggleTheme()} height="283" alt="light bulb" />
              {/* <p className="bulb-mode">dark mode</p> */}
            </div>
          </div>

          <div className="item content">
            <span>
              <div className="typewriter">
               
                <TypeAnimation
                  sequence={[
                    `" Hello there ! "`,
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    `"  नमस्ते ! "`,
                  ]}
                  wrapper="span"
                  speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                  deletionSpeed={{ type: "keyStrokeDelayInMs", value: 100 }}
                  cursor={false}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>

              <h1 className="name">
                <span className="content1">I AM</span> <span style={{ color: "#b336ff" }}>SIDDHARTH ROHAN</span>{" "}
              </h1>
              <p>
              As a side hustler, I thrive on challenges and enjoy delving into various projects that stretch my skills. Whether it's building responsive websites, developing interactive web applications, or tackling complex coding puzzles, I'm always eager to push boundaries.
              </p>
              <div className="social-media">
                <a className="social-media-hover" href={resume} download="RESUME">
                  <button className="resume-btn">
                    {" "}
                    RESUME <FaDownload />
                  </button>
                </a>
                <Link 
                  to="https://www.linkedin.com/in/siddharth-rohan-279385239/"
                  target="_blank"
                >
                  <AiFillLinkedin 
                    size={30}
                    style={{ color: "#ffffff" }}
                  ></AiFillLinkedin>
                </Link>

                <Link to="https://github.com/isidrohan"  target="_blank">
                  <AiFillGithub 
                    size={30}
                    style={{ color: "#ffffff" }}
                  ></AiFillGithub>
                </Link>

                <Link 
                  to="https://www.instagram.com/isidd_rohan/"
                  target="_blank"
                >
                  <AiOutlineInstagram 
                    size={30}
                    style={{ color: "#ffffff" }}
                  ></AiOutlineInstagram>
                </Link>
              </div>
            </span>
          </div>
        </div>
        {/* </div> */}
      </header>
    </>
  );
};
