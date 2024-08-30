import React from 'react';
import ParticlesBackground from './ParticlesBackground';
import '../../public/assets/styles/home.css';
import ContentHome from './Contact';
import Scrol_Left from './Scrol_Left';
import Single from './Single';

const Home = () => {
  return (
    <>
      <Scrol_Left />
      <div className='page_'>
        <ParticlesBackground /> 
        <div className="main-containerr" id='section___'>
          <div className="heading-wrapper">
            <Single />
          </div>
        </div>
      </div>
      <ContentHome />
    </>
  );
};

export default Home;
