import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const HeroSection = () => {
  return (
    <div className="hero-section-main-container">
      <div className="hero-section-main">
        <div className="filtersDiv"></div>

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
                  src="https://assets.mspimages.in/wp-content/uploads/2021/08/redmibook-2-1-1.png"
                  style={{ height: "350px" }}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://assets.mspimages.in/wp-content/uploads/2021/08/redmibook-2-1-1.png"
                  alt="Second slide"
                  style={{ height: "350px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://assets.mspimages.in/wp-content/uploads/2021/08/redmibook-2-1-1.png"
                  alt="Third slide"
                  style={{ height: "350px" }}
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
