import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerImg from "../../assets/bannerimg.png";
const HeroSection = () => {
  return (
    <div className="hero-section-main-container">
      <div className="hero-section-main">
        <div className="filtersDiv">
          <div className="filterLinks">
            <a href="#">Woman’s Fashion</a>
            <a href="#">Men’s Fashion</a>
            <a href="#">Electronics</a>
            <a href="#">Home & Lifestyle</a>
            <a href="#">Medicine</a>
            <a href="#">Sports & Outdoor</a>
            <a href="#">Baby’s & Toys</a>
            <a href="#">Groceries & Pets</a>
            <a href="#">Health & Beauty</a>
          </div>
        </div>

        <div className="sliderDiv">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={bannerImg}
                  style={{ height: "280px" }}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={bannerImg}
                  alt="Second slide"
                  style={{ height: "280px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={bannerImg}
                  alt="Third slide"
                  style={{ height: "280px" }}
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              {/* <span className="sr-only">Previous</span> */}
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              {/* <span className="sr-only">Next</span> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
