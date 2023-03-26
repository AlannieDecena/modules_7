import axios from "axios";
import React from "react";

//storing info in "baseURL"
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";


export default function App() {
  const [post, setPost] = React.useState('');

  // using 'useEffect' hook to import Axios, then using .get() method to make a GET request,
  //.then() calling back to get back all of the response data
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data); //response is returned as an object. 
    });
  }, );

  return (
    <div classname= "componentBox">
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
}