import React, { useEffect, useState } from 'react'
import { url2,options2 } from '../utils/constant';
import Videosidebar2 from './Videosidebar2';

const Videosidebar = () => {
const [videosidebar,setvideosidebar]=useState([]);

useEffect(()=>{
    fetchvideo();
},[])

const fetchvideo=async()=>{
    try {
        const response = await fetch(url2, options2);
        const result = await response.json();
        console.log(result);
        setvideosidebar(result.meta);
    } catch (error) {
        console.error(error);
    }
}



  return (
    <div><Videosidebar2 info={videosidebar}/></div>
  )
}

export default Videosidebar