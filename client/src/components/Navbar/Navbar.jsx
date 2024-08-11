import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHeart,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navabr">
          <div className="navbar-main">
            <div className="logo-div">
              <h2>ShopSphere</h2>
            </div>
            <div className="links-div">
              <a href="#" className="navlink">
                Home
              </a>
              <a href="#" className="navlink">
                About
              </a>
              <a href="#" className="navlink">
                contact
              </a>
              <a href="#" className="navlink">
                Sign Up
              </a>
            </div>
            <div className="input-icon-div">
              <div className="input-div">
                <input type="text" placeholder="what are you looking for" />
              </div>
              <div className="icon-div">
                <i>
                  {" "}
                  <FontAwesomeIcon icon={faHeart} />
                </i>

                <i>
                  {" "}
                  <FontAwesomeIcon icon={faCartShopping} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-container-mobile">
        <div className="navabr-mobile">
          <div className="navbar-main-mobile">
            <div className="logo-div-mobile">
              <h2>ShopSphere</h2>
            </div>
            <div className="hanbarger">
              <i>
                {" "}
                <FontAwesomeIcon icon={faBars} />
              </i>
            </div>

            <div className="showhambarger">
              <div className="links-div-mobile">
                <a href="#" className="navlink-mobile">
                  Home
                </a>
                <a href="#" className="navlink-mobile">
                  About
                </a>
                <a href="#" className="navlink-mobile">
                  contact
                </a>
                <a href="#" className="navlink-mobile">
                  Sign Up
                </a>
              </div>
              <div className="input-icon-div-mobile">
                <div className="input-div-mobile">
                  <input type="text" placeholder="what are you looking for" />
                </div>
                <div className="icon-div-mobile">
                  <i>
                    {" "}
                    <FontAwesomeIcon icon={faHeart} />
                  </i>

                  <i>
                    {" "}
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
