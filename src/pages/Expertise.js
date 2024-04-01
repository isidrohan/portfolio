import "../style/Expertise.css";
import { PiCursorClickFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
import { FaSchoolFlag } from "react-icons/fa6";

import html from "../image/html.png";
import css from "../image/css.png";
import react from "../image/react.png";
import nodejs from "../image/nodejs.png";
import mongo from "../image/mongo.png";
import figma from "../image/figma.png";
import dsalogo from "../image/dsa-logo.png";

export const Expertise = () => {
  return (
    <>
      <section className="expertise">
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
                <FaGraduationCap />
              </div>
              <div className="content-about">
                <h3>POST GRADUATION</h3>
                <p>i am a student study in dr bc roy engineering college </p>
              </div>
            </div>
            <div className="item-expertise">
              <div className="icon-expertise">
                <FaGraduationCap />
              </div>
              <div className="content-about">
                <h3>POST GRADUATION</h3>
                <p>i am a student study in dr bc roy engineering college </p>
              </div>
            </div>
            <div className="item-expertise">
              <div className="icon-expertise">
                <FaGraduationCap />
              </div>
              <div className="content-about">
                <h3>POST GRADUATION</h3>
                <p>i am a student study in dr bc roy engineering college </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
