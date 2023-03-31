import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import PostCard from './PostCard'

const baseURL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10";


export default function App() {
  const [posts, setPosts] = React.useState('');
  
 
  React.useEffect(() => {
    axios.get(baseURL)
    .then(response => {setPosts(response.data)})
    .catch(error => {console.log(error)})
    
  },[]);
  
  console.log(posts)
  return (
    <div className="componentBox">
 
    <Grid container spacing={4}>
      {posts.map(post => {
        return <Grid item xs = {12} sm = {6} md= {4}> 
        <PostCard post={post} key={post.id}/> </Grid>
 
      })}
      </Grid>
  </div>
  );
}

