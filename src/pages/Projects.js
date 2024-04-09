import "../style/Project.css";
import comp from "../image/work.png";
import notebook from "../image/notebook-icon.png"
import geekshub from "../image/geekshub-icon.png"
import weather from "../image/weather-icon.png"
import todo from "../image/todo-icon.png"
import electronicShop from "../image/electronic-shop-icon.png"
import textutils from "../image/textutils-icon.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 977,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 522,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section ref={props.nameforRef} className="project">
      <h2>Projects</h2>
      <div className="container-project">
        <Slider {...settings}>

          <div className="box-project">
            <div className="image-project">
              <img src={notebook} alt="project" height="250" />
            </div>
            <div className="content-project">
              <h3>NOTEBOOK</h3>
              <p>
                This is a full fledge MERN stack web application, where user can create their accout and add notes. Please preview to know more.
              </p>
            <button className="btn-project"><a href="https://notebook-roan.vercel.app/" target="_blank"> Preview</a></button>
            </div>  
          </div>

          <div className="box-project">
            <div className="image-project">
              <img src={geekshub} alt="project" height="550" />
            </div>
            <div className="content-project">
              <h3>GEEKS HUB</h3>
              <p>
              This is a MERN stack web application, having admin panel or database management from UI. Please preview to know more.
              </p>
            <button className="btn-project"><a href="https://geekshub-psi.vercel.app/" target="_blank"> Preview</a></button>
            </div>
          </div>

          <div className="box-project">
            <div className="image-project">
              <img src={weather} alt="project" height="250" />
            </div>
            <div className="content-project">
              <h3>WEATHER APP</h3>
              <p>
              This is a React project using OpenWeatherMap API, this app displays the weather of any city. Please preview to know more.
              </p>
            <button className="btn-project"><a href="https://check-da-weather.netlify.app/" target="_blank"> Preview</a></button>
            </div>
          </div>

          <div className="box-project">
            <div className="image-project">
              <img src={todo} alt="project" height="250" />
            </div>
            <div className="content-project">
              <h3>TODO APP</h3>
              <p>
              This is a React project, using local storage to store todo's, and have the ability to add or delete todos. Please preview to know more.
              </p>
            <button className="btn-project"><a href="https://toddowev.netlify.app/" target="_blank"> Preview</a></button>
            </div>
          </div>

          <div className="box-project">
            <div className="image-project">
              <img src={electronicShop} alt="project" height="250" />
            </div>
            <div className="content-project">
              <h3>ELECTRONIC SHOP</h3>
              <p>
              This is a landing page. Please preview to know more.
              </p>
            <button className="btn-project"> <a href="https://isidrohan.github.io/Electronic-shop/" target="_blank"> Preview</a></button>
            </div>
          </div>

          <div className="box-project">
            <div className="image-project">
              <img src={textutils} alt="project" height="250" />
            </div>
            <div className="content-project">
              <h3>TEXTUTILS</h3>
              <p>
                This is a text converter web application, created using bootstrap and js. Please preview to know more.
              </p>
            <button className="btn-project"> <a href="https://isidrohan.github.io/textutils/" target="_blank"> Preview</a></button>
            </div>
          </div>

          
        </Slider>
      </div>
    </section>
  );
};
