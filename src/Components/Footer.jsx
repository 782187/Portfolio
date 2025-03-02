import React, { useEffect, useRef } from 'react';
import '../Style/footer.css';

function Footer() {
    let yearRefrance = useRef(null);
    useEffect(function(){
        let date = new Date();
        yearRefrance.current.innerHTML = date.getFullYear();
    },[]);
    return (
        <>
            <div id='footer'>
                &copy;<span ref={yearRefrance}></span> Avinash Shinde, All Rights Reserved.
            </div>
        </>
    )
}

export default Footer;
