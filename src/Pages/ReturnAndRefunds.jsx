import { usePageTittle } from "../Components/utils/Helper";
import Support from './../Components/Support/Support';
import './CSS/ReturnAndRefunds.css'
function ReturnAndRefunds() {
  usePageTittle("Return and Refunds - Fourteen General Supply");
  return (
    <div className="return-and-refunds">
      <div className="return-and-refunds-content">
        <h3>Refund Policy</h3>
        <p>
          Due to the nature of electronic products, we do not offer refunds, unless product is under warranty. If
          there are any issues, please immediately get in touch with us on +255
          789 733300 or +255 764 422305. Alternatively, you may visit our
          branches for faster resolution.
        </p>
      </div>
      <Support/>
    </div>
  );
}

export default ReturnAndRefunds;
