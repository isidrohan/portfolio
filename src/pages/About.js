import "../style/About.css";
import { PiCursorClickFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { GiSchoolBag } from "react-icons/gi";
import { FaSchoolFlag } from "react-icons/fa6";
export const About = (props) => {
  return (
    <>
      <section ref={props.nameforRef} className="about">
        <h2>About</h2>
        <div className="container-about">
          <div className="item-about">
            <div className="icon-about">
                <FaGraduationCap />
            </div>
            <div className="content-about">
              <h3>POST GRADUATION</h3>
              <p> ------- </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <FaGraduationCap />
            </div>
            <div className="content-about">
              <h3>GRADUATION</h3>
              <p>Currently, I am pursuing BCA at Dr. B.C. Roy Engineering College, Durgapur. </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <FaSchoolFlag />
            </div>
            <div className="content-about">
              <h3>HGHER SECONDARY SCHOOL</h3>
              <p>I completed my +2 in 2020 from R.D & D.J. College in Bihar. </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <GiSchoolBag />
            </div>
            <div className="content-about">
              <h3>SECONDARY SCHOOL</h3>
              <p>I completed my matriculation from Saraswati Vidya Mandir in Bihar. </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
