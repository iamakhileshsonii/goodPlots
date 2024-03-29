import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from "uuid";
import Filter from './Explore/components/Filter';

const Testpage = () => (
  <div>
    <div><Filter /></div>


  </div>

);

export default Testpage;