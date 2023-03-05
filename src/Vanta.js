import React, { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'

const VantaJs = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)

    useEffect(() => {
        // effects setting
        if (!vantaEffect) {
            setVantaEffect(
                BIRDS({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    minHeight: 1200,
                    scale:1.00,
                    scaleMobile: 1.00,
                }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    // foreground elements
    return <div ref={myRef}>
       
    </div>
}


export default VantaJs;