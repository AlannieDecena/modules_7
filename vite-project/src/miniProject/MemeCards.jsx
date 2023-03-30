import React, { useState } from "react";

import ReactCardFlip from 'react-card-flip';


export default function ReactMemeCard({post}) {
    const [isFlipped, setIsFlipped] = useState(false)
  
    const handleClick = function(e)  {
    e.preventDefault();
    setIsFlipped(prevState => !prevState );
    }
  
    return (
        <div className="card-container">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick} className="CardFront">
      <img src={post.url}></img> 
      </div>
  
      <div onClick={handleClick} className="CardBack">
        {post.name}
      </div>
    </ReactCardFlip>
    </div>
    )
  }


// export default function memeCard({post}) {


// return (

// <div className="cardContainer">

//     <div className="card">
//         <div className="frontCard">
//             <img src={post.url}></img> 
//         </div>
//         <div className="backCard">
//             {post.name}
//         </div>
//     </div>

// </div>

  


