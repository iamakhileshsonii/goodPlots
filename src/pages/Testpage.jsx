import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from "uuid";
import FilterBtn from './Explore/components/FilterBtn';

const Testpage = () => (
  <div>
    <div><FilterBtn/></div>


  </div>

);

export default Testpage;