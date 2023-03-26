import React from "react";

function Greeting() {
    const [greet, setGreet] = React.useState('Hello World')

    return (
        <div className="componentBox" >

            <h2>{greet}</h2>

            <button onClick={() => setGreet('Hello Alannie')}>Change Greeting</button>

        </div>

    );
}

export default Greeting