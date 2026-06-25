import "./NavBar.css";
import React, { useState, useRef } from "react";
import menu from "../image/menu.png";
import cross from "../image/cross.png";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";
import { Expertise } from "../pages/Expertise";
import { Footer } from "../pages/Footer";

export const NavBar = () => {
  const [openmenu, setOpenmenu] = useState(false);

  const home = useRef();
  const about = useRef();
  const expertise = useRef();
  const project = useRef();
  const contact = useRef();

  const scrollHandler = (eleRef) => {
    window.scrollTo({
      top: eleRef.current.offsetTop,
      behavior: "smooth",
    });

    // Close menu on mobile after clicking a link
    setOpenmenu(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <li>
              <button
                type="button"
                className="logo-item"
                onClick={() => scrollHandler(home)}
              >
                WELCOME!
              </button>
            </li>
          </div>

          <nav className="menu">
            <img
              className="menu-btn"
              src={openmenu ? cross : menu}
              alt="menu"
              onClick={() => setOpenmenu(!openmenu)}
            />

            <ul className={`menu-items ${openmenu ? "menu-open" : ""}`}>
              <li>
                <button
                  type="button"
                  className="list-item"
                  onClick={() => scrollHandler(home)}
                >
                  HOME
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="list-item"
                  onClick={() => scrollHandler(about)}
                >
                  ABOUT
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="list-item"
                  onClick={() => scrollHandler(expertise)}
                >
                  EXPERTISE
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="list-item"
                  onClick={() => scrollHandler(project)}
                >
                  PROJECTS
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="list-item"
                  onClick={() => scrollHandler(contact)}
                >
                  CONTACT
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Home nameforRef={home} />
      <About nameforRef={about} />
      <Expertise nameforRef={expertise} />
      <Projects nameforRef={project} />
      <Contact nameforRef={contact} />
      <Footer />
    </>
  );
};