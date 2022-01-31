import React, { useState, useEffect } from 'react';
import Desktop from './Desktop'
import Mobile from './Mobile';

const Main = () => {

    const [sWidth, setSwidth] = useState(window.screen.width)


    const checkSize = () => {
        setSwidth(window.screen.width)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    })

    if (sWidth < 700) {
        return <>
            <Mobile />
        </>

    }
    else {
        return <>
            <Desktop />
        </>
    }


}


export default Main;