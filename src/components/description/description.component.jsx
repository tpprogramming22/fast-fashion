import './description.styles.scss';
import { useState, useEffect } from "react";
const Description = () => {

    const plus = "fa-solid fa-circle-plus";
    const minus = "fa-solid fa-circle-minus";

    const [toggleDescription, setToggleDescription] = useState(false);

    useEffect(()=>{
        const openOrCloseDescription = toggleDescription;
        

    },[toggleDescription])
    return (
        <div>
            <h2>Description</h2>
            <i onClick={()=>{setToggleDescription(!toggleDescription)}} class={toggleDescription ? `${minus}` : `${plus}`}></i>
            <div>
            {toggleDescription && <p className='information-paragraph'>This trending bodycon maxi dress had got 20% x and 80% y with sizes
          ranging from XS to XL</p>}
            </div>
        </div>
    )

}

export default Description;