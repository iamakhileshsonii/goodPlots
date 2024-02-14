import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const useLike = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    console.log("Property ID:");
    setIsLiked(!isLiked);
  };

  return { isLiked, handleLike };
};

export default useLike;
