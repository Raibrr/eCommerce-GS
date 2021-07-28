import { Link } from "react-router-dom";
import giftShop from '../images/logoGS.svg';

interface GSlogoInterface {
  display: string,
  height: string,
  width: string
}
const GiftShopLogo = ({ display, height, width} : GSlogoInterface) => {
	return (
    <div
      className={`position-fixed top-0 start-50 translate-middle-x ${display}`}
      style={{ zIndex: 1000, height: `${height}`, width: `${width}` }}
    >
      <Link to="/">
        <img className="w-100 h-100" src={giftShop} alt="Gift Shop" />
      </Link>
    </div>
  );  
}

export default GiftShopLogo
