import "./App.css";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <div class="hero-head">
        <div class="columns is-mobile is-marginless">
          <div class="column left is-flex">
            <div class="navbar-brand is-align-content-center">
              <a class="navbar-item" href="index.html">
                <FaGlobe />
              </a>
            </div>
          </div>
          <div class="column center">
            <div id="navbar" class="navbar-menu">
              <a class="navbar-item is-active" href="info-page.html">
                {" "}
                Home{" "}
              </a>
              <a class="navbar-item" href="about.html">
                {" "}
                About{" "}
              </a>
              <div class="navbar-item has-dropdown is-hoverable">
                <div class="navbar-link"> Destinations </div>
                <div class="navbar-dropdown">
                  <a class="navbar-item" href="destinations.html">
                    Visit Locations!
                  </a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item" href="new-entries.html">
                    New Entries
                  </a>
                </div>
              </div>
              <a class="navbar-item" href="map.html">
                {" "}
                Map{" "}
              </a>
              <a class="navbar-item" href="editpage.html">
                {" "}
                Edit Page{" "}
              </a>
            </div>
          </div>
          <div class="column right is-flex is-justify-content-flex-end">
            <div class="navbar-item desktop">
              <span class="icon">
                <a href="https://www.linkedin.com/in/mar%C3%ADa-agustina-carri%C3%B3n-cresta/">
                  <FaLinkedin />
                </a>
              </span>
              <span class="icon">
                <a href="https://www.instagram.com/codingtina/">
                  <FaInstagram />
                </a>
              </span>
              <span class="icon">
                <a href="https://www.facebook.com/agustina.carrion">
                  <FaFacebook />
                </a>
              </span>
              <span class="icon">
                <a href="https://twitter.com/agus_carrion_">
                  <FaTwitter />
                </a>
              </span>
            </div>

            <div class="navbar-brand">
              <a
                role="button"
                class="navbar-burger"
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
