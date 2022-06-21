import logo from "./logo.svg";
import "./App.css";
import picture from "./constants/skims.jpeg";
import myLogo from "./constants/18011.png";
import Sizes from "./components/sizes/sizes.component";
import Description from "./components/description/description.component";
import SizeGuide from "./components/size-guide/size-guide.component";
import ReturnsPolicy from "./components/returns-policy/returns-policy-components";
import PaymentForm from "./components/payment-form/payment-form.component";

function App() {
  return (
    <>
    <div className='content-container'>
      <img src={myLogo} alt="logo" className="main-logo" />
      <div></div>

      <img src={picture} alt="temp" className="model-picture" />

      <div>
        <h1>Grey Bodycon Dress</h1>
      </div>
      <div>
        <p className="red-paragraph">Last size left!</p>
        <Sizes />
      </div>
      <h2>£29.99</h2>
      <div className="payment-container">
        <div className="button-container">
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-apple-pay"></i>
        </div>
      </div>
      <a href="https://buy.stripe.com/test_5kAeV66fr2fI7BucMM">PAY NOW</a>
      <div>
      <Description />
        {/* <h2>Description</h2>
        <p>
          This trending bodycon maxi dress had got 20% x and 80% y with sizes
          ranging from XS to XL
        </p> */}
      </div>
      <div>
        <SizeGuide />
        {/* <h2>Size Guide</h2>
        <p>This is the size guide. Blah blah blah...</p> */}
      </div>
      <div>
        <ReturnsPolicy />
        {/* <h2>Returns Policy</h2>
        <p>
        Due to us buying it from aliexpress at a much cheaper rate we are
          unfortunately unable to offer refunds or returns.
        </p> */}
        <p></p>
      </div>
      </div>
    </>
  );
}

export default App;
