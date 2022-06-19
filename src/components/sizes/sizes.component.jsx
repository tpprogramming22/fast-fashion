import { useState, useEffect } from 'react';

import './sizes.styles.scss';

const Sizes = () => {
    const [sizes, setSizes] = useState('');
    



    useEffect(()=>{
        const chosenSize = sizes;
    //     if(sizes!=''){
    //         const buttonclick = document.getElementById(sizes);
    //     buttonclick.addEventListener('click', function onClick(event){
    //     buttonclick.style.backgroundColor = 'red';
    // })
    //     }

    }, [sizes])


    return (
        <>
        {/* <h2>Selected size = {sizes}</h2> */}
        <div className='sizes-container'>
            <span onClick={() => setSizes('XS')} className='out-of-stock'>XS</span>
            <span onClick={() => setSizes('S')} className='in-stock' >S</span>
            <span onClick={() => setSizes('M')} className='out-of-stock'>M</span>
            <span onClick={() => setSizes('L')} className='out-of-stock'>L</span>
        </div>
        </>
    )

}

export default Sizes;