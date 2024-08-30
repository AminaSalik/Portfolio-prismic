import React, { useEffect, useState } from 'react';
import { client } from './js/prismic';
import { RichText } from 'prismic-reactjs';
import '../../public/assets/styles/about.css';
// import ParticlesBackground from './ParticlesBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
import Frame from '../../public/assets/images/myProfil.png';

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
        <img className="frame" src={Frame} alt="About Me section - Decorative Frame" />
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
