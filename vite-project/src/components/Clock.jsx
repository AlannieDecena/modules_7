import React, { useContext } from "react";
import { EmojiContext } from "../context/EmojiContext";

function Clock() {
    const [time, setTime] = React.useState();
    const {mood} = useContext(EmojiContext)
    function tick() {
        const now = new Date();
        setTime(now.toLocaleTimeString())
    }
    setInterval(tick, 1000);
     return (
        <div className="Counter componentBox">
            time is {time} and mood is {mood}
           

        </div>

        )
}

export default Clock

