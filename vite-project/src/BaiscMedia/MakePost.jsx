import axios from "axios";
import React, { useState } from "react";



export default function MakePost() {
    const [id, setId] = useState.apply('')
    const [title, setTitle] = useState.apply('')
    const [body, setBody] = useState.apply('')   
    
    const newPosts = (e) => {
        e.preventDefualt()
        const newPost = {'id': id, 'title': title, 'body': body}
        const hostPost = 'https:jsonplaceholder.typicode.com/posts'

        axios.post(hostPost, newPost)
        .then(response => {console.log(response)})
        .catch(err => {console.log(err)})
        console.log(newPost)
    }
    
  return (
    <div className="componentBox">
       <h1>MakePost</h1> 

       <form>
        <label htmlFor="id">id:</label>
        <input type="number" id='id' onChange={e => setId(e.target.value)}/>
        <label htmlFor="title">title:</label>
        <input type="text" title='title' onChange={e => setTitle(e.target.value)}/>
        <label htmlFor="body">body:</label>
        <input type="text" body='body' onChange={e => setBody(e.target.value)}/>
        <button onClick={newPosts}>Post</button>
       </form>
        
    </div>
  )
}
