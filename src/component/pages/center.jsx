import React, { useEffect, useState } from 'react';
import Postcard from '../card/postcard';
import Createpost from '../forms/createpost';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

const Center = () => {

  const [gp_feed, setGpFeed] = useState([]);
  const postsRef = collection(db, "gp_feed");

  useEffect(()=>{
    async function getFeed(){
      const data = await getDocs(postsRef);
      setGpFeed(data.docs.map((document)=>(
        {...document.data(), id: document.id}
      )))
    }
    console.log(gp_feed)
    getFeed();
  }, [])


  return (
    <>
    <Createpost/>
    {
      gp_feed.map((post)=>(
        <Postcard post={post} key={post.id}/>
      ))
    }
    
    
    </>
  )
}

export default Center