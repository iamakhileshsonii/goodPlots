import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from "uuid";

const Testpage = () => {

  const[selectedImg, setSelectedImg ] = useState(null)
  const[imageList, setImageList] = useState([])

  const imageListRef = ref(storage, `properties/`);

  const handleFileUpload = (event)=>{
    event.preventDefault()
    console.log("Form submitted");
    try{
      const imageRef = ref(storage, `properties/${selectedImg.name + v4()}`) 
      uploadBytes(imageRef,selectedImg).then((snapshot)=>{
        getDownloadURL(snapshot.ref).then((url)=>{
          setImageList((prev) => [...prev, []])
        })
      })
    }catch(error){
      console.log("Error submitting form", error);
    }
  }

  useEffect(()=>{
    listAll(imageListRef).then((response)=>  
    response.items.forEach((item)=>{
      getDownloadURL(item).then((url)=>{
        setImageList((prev)=> [...prev, url]);
      })
    }))
  },[])

  return (
    <div>

      <form onSubmit={handleFileUpload}>
          <input type="file" onChange={(e)=> setSelectedImg(e.target.files[0])}/>
          <button type='submit' className='bg-black text-white'>Upload</button>
      </form>

      <div className='p-10 my-20' >
        {
          imageList.map((url)=>{
            return <img src={url} alt="" className='w-40 h-40 m-3'/>
          })
        }
      </div>
   

    </div>

  );
};

export default Testpage;