import "../style/Expertise.css";
import { PiCursorClickFill } from "react-icons/pi";
import { SiAlwaysdata } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";


import html from "../image/html.png";
import css from "../image/css.png";
import react from "../image/react.png";
import nodejs from "../image/nodejs.png";
import mongo from "../image/mongo.png";
import figma from "../image/figma.png";
import dsalogo from "../image/dsa-logo.png";

export const Expertise = (props) => {
  return (
    <>
      <section ref={props.nameforRef} className="expertise">
        <h2>Expertise</h2>
        <div className="container-expertise">
          <div className="logo-box-expertise">
            <div className="logo-item-expertise">
                <div className="logo-expertise">
                    <img src={html} alt="html logo" height="75" />
                </div>
                <p>HTML</p>
            </div>
            <div className="logo-item-expertise">
            <div className="logo-expertise">
                    <img src={css} alt="html logo" height="75" />
                </div>
                <p>CSS</p>
            </div>
            <div className="logo-item-expertise">
            <div className="logo-expertise">
                    <img src={react} alt="html logo" height="75" />
                </div>
              <p>React</p>
            </div>
            <div className="logo-item-expertise">
            <div className="logo-expertise">
                    <img src={nodejs} alt="html logo" height="75" />
                </div>
              <p>Node</p>
            </div>
            <div className="logo-item-expertise">
            <div className="logo-expertise">
                    <img src={mongo} alt="html logo" height="75" />
                </div>
              <p>MongoDB</p>
            </div>
            <div className="logo-item-expertise">
            <div className="logo-expertise">
                    <img src={figma} alt="html logo" height="75" />
                </div>
              <p>Figma</p>
            </div>
            <div className="logo-item-expertise">
            <div className="logo-expertise">
                    <img src={dsalogo} alt="html logo" height="75" />
                </div>
              <p>DSA</p>
            </div>
          </div>
          <div className="content-box-expertise">
            <div className="item-expertise">
              <div className="icon-expertise">
                <PiCursorClickFill />
              </div>
              <div className="content-about">
                <h3>FULLSTACK DEVELOPER</h3>
                <p>I'm a full-stack developer with experience in building responsive and optimized sites.</p>
              </div>
            </div>
            <div className="item-expertise">
              <div className="icon-expertise">
                <SiAlwaysdata />
              </div>
              <div className="content-about">
                <h3>DATA STRUCTURE AND ALGO</h3>
                <p>Advancements in DSA achieved through self-study and practical application.</p>
              </div>
            </div>
            <div className="item-expertise">
              <div className="icon-expertise">
                <CgWebsite />
              </div>
              <div className="content-about">
                <h3>UI DESIGNER</h3>
                <p>Using Figma, I've crafted landing pages, each uniquely designed to captivate and engage users. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
