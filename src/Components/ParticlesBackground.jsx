import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 120, // Limits the FPS
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push", // Particles are added on click
            },
            onHover: {
              enable: true,
              mode: "repulse", // Particles repulse on hover
            },
            resize: true,
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
          color: {
            value: "#ffffff", // Color of the particles
          },
          links: {
            color: "#ffffff", // Color of the links between particles
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            speed: 2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5, // Opacity of the particles
          },
          shape: {
            type: "circle", // Shape of the particles
          },
          size: {
            value: { min: 1, max: 5 }, // Size of the particles
          },
        },
        detectRetina: true, // Enables retina detection
      }}
    />
  );
};

export default ParticlesBackground;
