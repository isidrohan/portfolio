import "../style/About.css";
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
              <p>
                Currently, I am pursuing my MCA at Vellore Institute of
                Technology.
              </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <FaGraduationCap />
            </div>
            <div className="content-about">
              <h3>GRADUATION</h3>
              <p>
                I have completed my BCA from Dr. B.C. Roy Engineering College,
                Durgapur.
              </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <FaSchoolFlag />
            </div>
            <div className="content-about">
              <h3>HIGHER SECONDARY SCHOOL</h3>
              <p>
                I completed my Higher Secondary education in 2020 from R.D.
                &amp; D.J. College, Bihar.
              </p>
            </div>
          </div>
          <div className="item-about">
            <div className="icon-about">
              <GiSchoolBag />
            </div>
            <div className="content-about">
              <h3>SECONDARY SCHOOL</h3>
              <p>
                I completed my Secondary School education from Saraswati Vidya
                Mandir, Bihar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
