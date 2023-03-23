import React from "react";

function Clock() {
    const [time, setTime] = React.useState();

    function tick() {
        const now = new Date();
        setTime(now.toLocaleTimeString())
    }
    setInterval(tick, 1000);
     return (
        <div>
            time is {time}
        </div>

        )
}

export default Clock

