import './CSS/ShipingPolicy.css'
import { usePageTittle } from "../Components/utils/Helper";
import Support from './../Components/Support/Support';

function ShipingPolicy() {
  usePageTittle("Shiping Policy - Fourteen General Supply",'shiping-policy');
  return (
    <div className="shiping-container">
      <div className="shiping-content">
        <h3>Shiping Policy</h3>
        <p>
          We currently provide free delivery to selected locations in Dar es
          salaam. Other locations are shipped to at a nominal fee.
        </p>
      </div>
      <Support/>
    </div>
  );
}

export default ShipingPolicy;
