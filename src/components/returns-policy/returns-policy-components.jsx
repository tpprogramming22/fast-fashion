import { useState, useEffect } from "react";
const ReturnsPolicy = () => {

    const plus = "fa-solid fa-circle-plus";
    const minus = "fa-solid fa-circle-minus";

    const [toggleReturnsPolicy, setToggleReturnsPolicy] = useState(false);

    useEffect(()=>{
        const openOrCloseSize = toggleReturnsPolicy;

    },[toggleReturnsPolicy])
    return (
        <div>
            <h2>Returns Policy</h2>
            <i onClick={()=>{setToggleReturnsPolicy(!toggleReturnsPolicy)}} class={toggleReturnsPolicy ? `${minus}` : `${plus}`}></i>
            <div>
            {toggleReturnsPolicy && <p className='information-paragraph'>Due to us buying it from aliexpress at a much cheaper rate we are
          unfortunately unable to offer refunds or returns.</p>}
            </div>
        </div>
    )

}

export default ReturnsPolicy;