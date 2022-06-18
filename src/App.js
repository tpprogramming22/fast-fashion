import logo from "./logo.svg";
import "./App.css";
import picture from './constants/skims.jpeg';

function App() {
  return (
    <>

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
