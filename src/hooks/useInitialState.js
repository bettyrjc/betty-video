import React, {useState, useEffect} from 'react';


const useInitialState = (API) =>{
  const [videos, setVideos] = useState([]);
useEffect(()=>{
  fetch(API)
    .then(response => response.json())
    .then(data => setVideos(data))
  },[]
  // escucha una propiedad para que escuche cuando se cambia y actualice
  )
// console.log(videos);
return videos
}
export default useInitialState;