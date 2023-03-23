import React from "react"; 

function Emojis () {
    const eggEmoji = 'https://w7.pngwing.com/pngs/917/919/png-transparent-animal-sitting-on-white-cloth-%E3%81%90%E3%81%A7%E3%81%9F%E3%81%BE-sticker-gudetama-smiley-desktop-wallpaper-emoticon-thumbnail.png'
    const eggTwoEmoji = 'https://w7.pngwing.com/pngs/534/108/png-transparent-%E3%81%90%E3%81%A7%E3%81%9F%E3%81%BE-sanrio-character-egg-gudetama-desktop-wallpaper-gudetama-area.png'

    const [eggEmojis, setEggEmojis] = React.useState(eggEmoji)


     function toggle() {
            if (eggEmoji === eggEmojis ) {setEggEmojis(eggTwoEmoji)}
            else {setEggEmojis(eggEmoji)}
            // setEggEmojis(eggTwoEmoji)
     } 

   return (
    <div className="componentBox"> 

        <img width={200} height={200} src= {eggEmojis}></img>
        <br/>
        <button onClick={toggle}>button</button>

    </div>
    
   )
}

export default Emojis