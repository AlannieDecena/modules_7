
import {useEffect, useState} from 'react';
import axios from 'axios';
// import MemeCards from './MemeCards'
import  ReactMemeCard from './MemeCards';
import Grid from '@mui/material/Grid';
import AddMeme from './AddMeme';
  

  
  export default function Meme() {
      const [posts, setPosts] = useState([])
      const [page, setPage] = useState(1);
     

    useEffect(()=> {
        
        const axMeme='https://api.imgflip.com/get_memes'
        // console.log(axMeme)
        axios.get(axMeme)
        .then(response=> { setPosts(response.data.data.memes)})
        .catch(error => {console.log(error)})
        })
  

  return (
     <div>
        {/* <AddMeme/> */}
    
      <Grid container spacing={4}>
        {posts.map(post => {
          return <Grid item xs = {12} sm = {6} md= {4}> 
          <ReactMemeCard post={post} key={post.id}/> </Grid>

        })}
        </Grid>
    </div>
              
 );
}