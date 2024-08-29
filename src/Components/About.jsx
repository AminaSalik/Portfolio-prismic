import React, { useEffect, useState } from 'react';
import { client } from './js/prismic';
import { RichText } from 'prismic-reactjs';
import '../assets/styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frame from '../assets/images/_Image_2024-08-06_at_5.40.37_PM__2_-removebg-preview.png';

function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await client.getSingle('aboutpage');
        setAboutData(response.data);
      } catch (error) {
        console.error("Error fetching About data:", error);
      }
    };

    fetchAboutData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <img className="frame" src={Frame} alt="Frame" />
      </div>


  <div className='textabout about-section'>
        <>
          <h1 className='title-about slide-in'>
            {RichText.asText(aboutData.title)}
          </h1>
          <p className='text-about space-text slide-in'>
            {RichText.asText(aboutData.paragraph)}
          </p>
        </>
      </div>

      
    </>
  );
}

export default About;
