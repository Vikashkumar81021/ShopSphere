import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faBars,
  faCartShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const showNavigationMenu = () => {
    const hamburgerDiv = document.querySelector(".showhamburgerdiv");
    hamburgerDiv.style.left = "0"; // Ensure it slides into view from the right
    hamburgerDiv.style.display = "block"; // Make sure it's visible
  };

  const hideNavigationMenu = () => {
    const hamburgerDiv = document.querySelector(".showhamburgerdiv");
    hamburgerDiv.style.left = "100%"; // Slide out of view
    setTimeout(() => {
      hamburgerDiv.style.display = "none"; // Hide it after transition
    }, 300); // Adjust this timing based on your transition duration
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-main">
            <div className="logo-div">
              <h2>Exclusive</h2>
            </div>
            <div className="links-div">
              <Link to="/" className="navLink">
                Home
              </Link>
              <Link to="/contact" className="navLink">
                Contact
              </Link>
              <Link to="/about" className="navLink">
                About
              </Link>
              <Link to="/signup" className="navLink">
                Sign Up
              </Link>
            </div>
            <div className="input-and-icons-div">
              <div className="input-div">
                <input type="text" placeholder="What are you looking for?" />
              </div>
              <div className="icons-div">
                <i>
                  <FontAwesomeIcon icon={faHeart} />
                </i>
                <i>
                  <FontAwesomeIcon icon={faCartShopping} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-container-mobile">
        <div className="navbar-mobile">
          <div className="navbar-main-mobile">
            <div className="logo-div-mobile">
              <h2>Exclusive</h2>
            </div>

            <div className="hamburger-main">
              <FontAwesomeIcon icon={faBars} onClick={showNavigationMenu} />
            </div>

            <div className="showhamburgerdiv">
              <div className="mobile-top-main">
                <div className="logo-div-mobile">
                  <h2>Exclusive</h2>
                </div>

                <div className="hamburger-main">
                  <FontAwesomeIcon
                    icon={faXmark}
                    onClick={hideNavigationMenu}
                    className="crossIcon"
                  />
                </div>
              </div>

              <div className="links-div-mobile">
                <Link to="/" className="navLink-mobile">
                  Home
                </Link>
                <Link to="/contact" className="navLink-mobile">
                  Contact
                </Link>
                <Link to="/about" className="navLink-mobile">
                  About
                </Link>
                <Link to="/signup" className="navLink-mobile">
                  Sign Up
                </Link>
              </div>
              <div className="input-and-icons-div-mobile">
                <div className="input-div-mobile">
                  <input type="text" placeholder="What are you looking for?" />
                </div>
                <div className="icons-div-mobile">
                  <i>
                    <FontAwesomeIcon icon={faHeart} />
                  </i>
                  <i>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
