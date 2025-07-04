import { usePageTittle } from "../Components/utils/Helper";
import "./CSS/TermsAndCondtion.css";
import Support from './../Components/Support/Support';

function TermsAndCondition() {
   usePageTittle("Terms and Conditions - Fourteen General Supply");
  return (
    <div className="terms-container">
      <div className="terms">
        <h2>Terms and Conditions</h2>
        <p>
          We have tried to make our Terms and Conditions very simple so as to
          feed you with all information that we possibly can regarding online
          and in store sales so that you can understand the whole process.
          Please take a minute to read these terms . Purchasing any product from
          us means you have accepted our terms and conditions. Please check from
          time to time for any updates on the terms.
        </p>
        <h4>Price and Payments</h4>
        <p>
          All our prices are in Tanzanian Shillings. The total cost of your
          order will be the price of the products you will order plus any other
          delivery charge if applicable or any other optional service that you
          may have chose like installation services and so. The delivery charge
          will be based on your location if its more farther than the store then
          higher delivery charges will be charged.
        </p>
        <p>
          Your order will be processed and you will receive an email with your
          invoice which you will have to pay with the available payment options
          for the order to be processed and delivered to you. Payments options
          available include Tigo Pesa, M-Pesa and Airtel Money. For smaller or
          lower priced items we do accept Cash on Delivery. Cash on delivery
          will give you the option to pay once its delivered to you.
        </p>
        <h4>Delivery Options</h4>
        <p>
          You will be able to find more about our delivery services by looking
          in our shiping policy section.
        </p>
        <h4>Missing or Incorrect orders</h4>
        <p>
          Incase you have received an incorrect or missing items in your order
          please do contact us asap within 24hrs via our contact form or give us
          a call 0789733300.
        </p>
        <h4>Refund Policy</h4>
        <p>For our Refund Policy please check the Refunds page.</p>
        <p>We cannot refund:</p>
        <ul>
          <li>If you return to the store without a proof of purchase.</li>
          <li>
            You have broken the seal of a CD, memory cards, software and other
            products.
          </li>
          <li>
            If the seal of a software Product Activation key has been partially
            damaged or stripped.
          </li>
        </ul>
        <h4>This Website</h4>
        <p>
          We own the trademarks, copyright and all other ip rights in terms of
          content of the site and materials, which you may use only for
          educational purposes and not for commercial use. Any other
          reproduction and use of our content is strictly prohibited in
          Tanzania.
        </p>
        <h4>Privacy Policy</h4>
        <p>
          When you are browsing, this website might collect small identification
          and purchase behaviour in order to serve you better when you come back
          as a returning customer. No personal identification information is
          stored on our cookie data.
        </p>
        <p>
          However all browsers have the option to disable cookies for certain
          websites if you wish to do so. But by doing so this will stop the
          functionality of this site and you will basically be unable to buy
          through the website, but you can always come to visit our shop at Faykate Tower if its a better experience for you.
        </p>
      </div>
      <Support/>
    </div>
  );
}

export default TermsAndCondition;
