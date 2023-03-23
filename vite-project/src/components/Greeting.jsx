import React from "react";

function Greeting() {
    const [greet, setGreet] = React.useState('Hello World')

    return (
        <div className="componentBox" >

            <h2>Hook greeting</h2>

            <p>{greet}</p>

            <button onClick={() => setGreet('Hello Alannie')}>Change Greeting</button>

        </div>

    );
}

export default Greeting