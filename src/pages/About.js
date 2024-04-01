import "../style/About.css";
import { PiCursorClickFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
import { FaSchoolFlag } from "react-icons/fa6";
export const About = () => {
  return (
    <>
      <section className="about">
        <h2>About</h2>
        <div className="container-about">
          <div className="item-about">
            <div className="icon-about">
                <FaGraduationCap />
            </div>
            <div className="content-about">
              <h3>POST GRADUATION</h3>
              <p>i am a student study in dr bc roy engineering college </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <FaGraduationCap />
            </div>
            <div className="content-about">
              <h3>GRADUATION</h3>
              <p>i am a student study in dr bc roy engineering college </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <FaSchoolFlag />
            </div>
            <div className="content-about">
              <h3>HGHER SECONDARY SCHOOL</h3>
              <p>i am a student study in dr bc roy engineering college </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <GiSchoolBag />
            </div>
            <div className="content-about">
              <h3>SECONDARY SCHOOL</h3>
              <p>i am a student study in dr bc roy engineering college </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
