// Project.jsx
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import '../../public/assets/styles/pro.css';
import '../../public/assets/styles/taxi.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from './js/prismic';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import Location from './LocationInfo';
import Taxi from './Taxi'; // Import the Taxi component
import '@fortawesome/fontawesome-free/css/all.min.css';

const Project = () => {
 
  return (
    <div className='page___'>
      <div className='main-container____'>
      <div class="cell">
    <div class="circle loader"></div>
    <p className='loader_paragraph' >loader</p>
  </div>
        <Location />
      </div>
    </div>
  );
};

export default Project;
