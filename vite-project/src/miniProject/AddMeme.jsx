import React, { useState } from 'react'
import axios from 'axios'
import { TextField } from '@mui/material'

export default function AddMeme() {
const [img, setImg] = useState('')
const [tag, setTag] = useState('')
const [id, setId] = useState('')

const addMeme = function(e) {
        e.preventDefault()
        const newMeme = {'id' : id, 'name': tag ,'url': img}
        const axMeme='https://api.imgflip.com/caption_image'
        console.log(axMeme)
        axios.post(axMeme, newMeme)
        .then(response=> {console.log(response)})
        .catch(error => {console.log(error)})
        }


  return (
    <div className='About'>
        <h1>Add a Meme!</h1>
        <form>
            <div>
                <TextField type="text" onChange={e => setImg(e.target.value)}/>
                <TextField type="text" onChange={e => setTag(e.target.value)}/>
                <TextField type="text" onChange={e => setId(e.target.value)}/>
        {/* <input type="text" onChange={e => setImg(e.target.value)}> </input> */}
        <button onClick={addMeme}>add</button>
        </div>
        </form>
        </div>
  )
}
