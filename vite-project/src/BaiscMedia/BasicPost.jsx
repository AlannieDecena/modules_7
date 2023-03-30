import { Grid } from "@mui/material";
import axios from "axios";
import React from "react";
import PostCard from './PostCard'

const baseURL = "https://jsonplaceholder.typicode.com/posts";


export default function App() {
  const [posts, setPosts] = React.useState('');

  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data); 
      console.log(response.data)
    });
  },[] );

//   const postList = posts.map((post, index) => (/* in a pinch you can use the array index as the key but it's not recommended */
//   <Grid item sm = {6}>
//       <PostCard key={post.id} id={post.id} title={post.title}  set="set4"/>
//   {/* <Student key={student.id} id={student.id} name={student.name} location={student.location} set="set4"/> */}
//   </Grid>
  
  //<Student key={student.id} student={student}/> //we could also pass the whole student object as a single prop and do props.student.name
  // <Student key={student.id} {...student}/> //or we can destructure the student object and unpack it into individual props like this
// ))

  return (
    <div className= "componentBox">
        {/* <Grid>{postList}</Grid> */}
    </div>
  );
}