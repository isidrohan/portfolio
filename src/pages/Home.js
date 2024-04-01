import "../style/Home.css";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDownload } from "react-icons/fa6";
// import sidimage from "../image/sid.jpeg";
import sidimage from "../image/sid2.png";
import bulb2 from "../image/bulb2.png";
import bulbglow from "../image/bulb glow.png";
import { ReactTyped } from "react-typed";
import { TypeAnimation } from "react-type-animation";
import resume from "../image/RESUME S.pdf";
export const Home = () => {
  return (
    <>
      <header className="box">
        <div className="box-container grid grid-two-col">
          {/* <div className="box-container-item"> */}
          <div className="item image">
            <img src={sidimage} alt="sid" height="400" />

            <div className="light">
              <img className="bulb" src={bulbglow} alt="light bulb" />
              {/* <p className="bulb-mode">dark mode</p> */}
            </div>
          </div>

          <div className="item content">
            <span>
              <div className="typewriter">
                {/* <ReactTyped
                  strings={[`" Hello there ! "`, `"  नमस्ते ! "`]}
                  typeSpeed={150}
                  backSpeed={150}
                //   loop
                /> */}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    `" Hello there ! "`,
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                adipisci voluptas dolores molestias omnis, cum earum! Corrupti
                minima enim illum reiciendis dolores architecto nihil
                exercitationem vitae consequuntur doloribus optio, tenetur
                molestias repellendus.
              </p>
              <div className="social-media">
                <a href={resume} download="RESUME">
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

                <Link to="https://github.com/isidrohan" target="_blank">
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
