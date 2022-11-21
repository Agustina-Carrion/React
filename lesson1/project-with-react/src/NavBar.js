import "./App.css";
import {
  FaGlobe,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import MenuItems from "./MenuItems";

function NavBar() {
  return (
    <>
      <div className="hero-head">
        <div className="columns is-mobile is-marginless">
          <div className="column left is-flex">
            <div className="navbar-brand is-align-content-center">
              <a className="navbar-item" href="index.html">
                <FaGlobe />
              </a>
            </div>
          </div>
          <MenuItems />
          {/* <div className="column center">
            <div id="navbar" className="navbar-menu">
              <a className="navbar-item is-active" href="info-page.html">
                {" "}
                Home{" "}
              </a>
              <a className="navbar-item" href="about.html">
                {" "}
                About{" "}
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link"> Destinations </div>
                <div className="navbar-dropdown">
                  <a className="navbar-item" href="destinations.html">
                    Visit Locations!
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item" href="new-entries.html">
                    New Entries
                  </a>
                </div>
              </div>
              <a className="navbar-item" href="map.html">
                {" "}
                Map{" "}
              </a>
              <a className="navbar-item" href="editpage.html">
                {" "}
                Edit Page{" "}
              </a>
            </div>
          </div> */}
          <div className="column right is-flex is-justify-content-flex-end">
            <div className="navbar-item desktop">
              <span className="icon">
                <a href="https://www.linkedin.com/in/mar%C3%ADa-agustina-carri%C3%B3n-cresta/">
                  <FaLinkedin />
                </a>
              </span>
              <span className="icon">
                <a href="https://www.instagram.com/codingtina/">
                  <FaInstagram />
                </a>
              </span>
              <span className="icon">
                <a href="https://www.facebook.com/agustina.carrion">
                  <FaFacebook />
                </a>
              </span>
              <span className="icon">
                <a href="https://twitter.com/agus_carrion_">
                  <FaTwitter />
                </a>
              </span>
            </div>

            <div className="navbar-brand">
              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar"
                href="./info-page.html"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
