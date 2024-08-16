import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-regular-svg-icons";
import "./FlashSalesCard.css";
import cardImage from "../../assets/card-image.png";

const FlashSlaesCard = () => {
  return (
    <div className="main-card-body">
      <div className="main-cards-div">
        <div className="card-div">
          <div className="prdocut-image-parent">
            <img src={cardImage} className="card-img-top" alt="Product" />
            <div className="badge-div">
              <p>40%</p>
            </div>
            <div className="wish-list-div">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="view-div">
              <FontAwesomeIcon icon={faEye} />
            </div>
          </div>

          <div className="card-body">
            <p className="card-text py-3">HAVIT HV-G92 Gamepad</p>
            <p className="product-price">$120</p>
            <div className="rating">
              <input type="radio" name="rating" value="5" id="5" />
              <label htmlFor="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" />
              <label htmlFor="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" />
              <label htmlFor="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" />
              <label htmlFor="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" />
              <label htmlFor="1">☆</label>
            </div>
          </div>
        </div>

        {/* Repeat the card structure for other products */}
        {/* ... */}
      </div>
    </div>
  );
};

export default FlashSlaesCard;
