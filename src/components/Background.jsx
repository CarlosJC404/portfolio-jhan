import { useEffect } from "react"
import { sizeCanvas } from "../functions/canvas"

export const Background = () => {
    useEffect(() => {
        sizeCanvas()
    }, [])
    return (
        <canvas id="canvas">

        </canvas>
    )
}