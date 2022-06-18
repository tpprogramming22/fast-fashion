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

    <div>GREY BODYCON DRESS</div>
    <div>SIZES</div>

      <div className="payment-container">
        <div className="button-container">
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-apple-pay"></i>
        </div>
        
      </div>
      <div>
          DESCRIPTION
        </div>
        <div>
          SIZE GUIDE
        </div>
        <div>
          RETURNS POLICY
        </div>
    </>
  );
}

export default App;
