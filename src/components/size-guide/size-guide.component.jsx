import './size-guide.styles.scss';
import { useState, useEffect } from "react";
const SizeGuide = () => {

    const plus = "fa-solid fa-circle-plus";
    const minus = "fa-solid fa-circle-minus";

    const [toggleSizeGuide, setToggleSizeGuide] = useState(false);

    useEffect(()=>{
        const openOrCloseSize = toggleSizeGuide;

    },[toggleSizeGuide])
    return (
        <div>
            <h2>Size Guide</h2>
            <i onClick={()=>{setToggleSizeGuide(!toggleSizeGuide)}} class={toggleSizeGuide ? `${minus}` : `${plus}`}></i>
            <div>
            {toggleSizeGuide && <p className='information-paragraph'>This is the size guide. Blah blah blah...</p>}
            </div>
        </div>
    )

}

export default SizeGuide;