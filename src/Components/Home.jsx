import React, { useEffect } from 'react';
import { loadFull } from 'tsparticles';
import '../assets/styles/home.css';
import ContentHome from './Contact';
import Scrol_Left from './Scrol_Left';
import Single from './Single';

const Home = () => {
  useEffect(() => {
    const initParticles = async () => {
      await loadFull(tsParticles);

      tsParticles.load({
        id: "section___",
        options: {
          background: {
            repeat: "no-repeat",
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse"
              },
              onHover: {
                enable: true,
                mode: "bubble"
              }
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0,
                size: 0,
                speed: 3
              },
              repulse: {
                distance: 400,
                duration: 0.4
              }
            }
          },
          particles: {
            color: { value: "#ffffff" },
            move: {
              direction: "none",
              enable: true,
              outModes: "out",
              random: true,
              speed: 0.3
            },
            number: {
              density: {
                enable: true
              },
              value: 200
            },
            opacity: {
              animation: {
                enable: true,
                speed: 5
              },
              value: { min: 0.3, max: 0.6 }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: 1
            }
          }
        }
      });
    };

    initParticles();
  }, []);

  return (
    <>
      <Scrol_Left />
      <div className='page_'>
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
