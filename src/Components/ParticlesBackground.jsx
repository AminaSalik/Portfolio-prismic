import React, { useEffect } from 'react';
// import "../assets/styles/particlesBackground.css";

const ParticlesBackground = () => {
  useEffect(() => {
    // Initialize tsParticles here directly
    if (window.tsParticles) {
      window.tsParticles.load("tsparticles", {
        background: {
          color: "#000",
         
          repeat: "no-repeat",
          size: "40%",
          position: "60% 50%"
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
            value: 600
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
      });
    }
  }, []);

  return (
    <div>
      <div id="tsparticles" />
       </div>
  );
};

export default ParticlesBackground;
