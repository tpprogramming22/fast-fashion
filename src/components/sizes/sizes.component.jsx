import { useState, useEffect } from 'react';

import './sizes.styles.css';

const Sizes = () => {
    const [sizes, setSizes] = useState('');

    useEffect(()=>{
        const chosenSize = sizes;

    }, [sizes])


    return (
        <>
        {/* <h2>Selected size = {sizes}</h2> */}
        <div className='sizes-container'>
            <span onClick={() => setSizes('XS')} className={sizes=='XS' ? 'selected' : null}>XS</span>
            <span onClick={() => setSizes('S')} className={sizes=='S' ? 'selected' : null}>S</span>
            <span onClick={() => setSizes('M')} className={sizes=='M' ? 'selected' : null}>M</span>
            <span onClick={() => setSizes('L')} className={sizes=='L' ? 'selected' : null}>L</span>
        </div>
        </>
    )
}

export default Sizes;