import { Fragment, useState } from "react";

export default function RefectorPointer() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    function handleOnMouseMon(event) {
        // console.dir(event)
        setPosition({
            // ...position,
            x:event.clientX,
            y:event.clientY
        })
    }
    return (
        <Fragment>
            <div
                onMouseMove={handleOnMouseMon}
                style={
                    {
                        position: "relative",
                        height: "100vh",
                        width: "100vw"
                    }
                } >

                <div style={
                    {
                        position: "absolute",
                        backgroundColor: "red",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        left: -10,
                        top: -10,
                        transform: `translate(${position.x}px,${position.y}px)`
                    }
                } >

                </div>

            </div>
        </Fragment>
    )
}