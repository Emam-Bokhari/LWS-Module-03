import { Fragment, useState } from "react";

export default function Pointer() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    function handleOnMouseMon(event) {
        // console.dir(event)
        setX(event.clientX)
        setY(event.clientY)
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
                        transform: `translate(${x}px,${y}px)`
                    }
                } >

                </div>

            </div>
        </Fragment>
    )
}