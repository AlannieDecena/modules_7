import React, {useContext, useState} from "react";
import {EmojiContext} from "../context/EmojiContext"



export default function Emoji() {

    const {hmmm, ughh, mood, setMood} = useContext(EmojiContext)

console.log(mood, hmmm, ughh)

  return (
    <>
    <div className="Counter componentBox">{mood}
    {/* */}
    <button onClick={() => setMood(mood === hmmm ? ughh : hmmm)}>button</button>
    </div>
    </>
    
  )
}
