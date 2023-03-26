import React, { useState } from "react"; 



export const EmojiContext = React.createContext('')

const hmmm = (<div><p>hmmm</p></div>)

const ughh = (<div><p>ughh</p></div>)


export function EmojiProvider(props) {
    const [mood, setMood] = useState(hmmm)

    return (
        <EmojiContext.Provider value = {{hmmm,ughh,mood, setMood}}>
            {props.children}
        </EmojiContext.Provider>
    )
}



