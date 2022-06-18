import logo from "./logo.svg";
import "./App.css";
import picture from './constants/skims.jpeg';
import myLogo from './constants/1801.png'

function App() {
  return (
    <>

    <img src={myLogo} alt='logo' className='main-logo'/>
    <div></div>

    <img src={picture} alt='temp' className='model-picture'/>

    <div>
      <h1>Grey Bodycon Dress</h1>
    </div>
    <div>
      <h2>Sizes</h2>
      <p>XS S M L XL</p>
    </div>
    <h2>£29.99</h2>
    <div className="payment-container">
        <div className="button-container">
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-apple-pay"></i>
        </div>
      
        
      </div>
      <div>
          <h2>Description</h2>
          <p>This trending bodycon maxi dress had got 20% x and 80% y with sizes ranging from XS to XL</p>
        </div>
        <div>
          <h2>Size Guide
          </h2>
          <p>This is the size guide. Blah blah blah...</p>
        </div>
        <div>
          <h2>Returns Policy</h2>
          <p>Due to us buying it from aliexpress at a much cheaper rate we are unfortunately unable to offer refunds or returns.</p>
        </div>
    </>
  );
}

export default App;
