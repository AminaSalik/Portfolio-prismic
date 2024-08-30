import React,{ useEffect} from 'react';
import '../../public/assets/styles/not_find.css'; // Adjusted path
import Mouse from '../../public/assets/images/Mouse Follower (1).png';
import Error from '../../public/assets/images/Frame 23 (2).svg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Location from './LocationInfo'
import { loadFull } from 'tsparticles';
import '@fortawesome/fontawesome-free/css/all.min.css';



function  Not_Find() {
    useEffect(() => {
        const initParticles = async () => {
          await loadFull(tsParticles);
    
          tsParticles.load({
            id: "section_NotFind",
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
        <div className="page___">
            <div className="main-container____ "id='section_NotFind'>
            <Link to="/" className="">
            <i className="  fa_left fas fa-arrow-left"></i>
          </Link>
                <div className='' >
              
                    <img className='mouse' src={Mouse} alt="Mouse Follower" />
                </div>
                <div className='anim_Section'>
                    <img className='Error'
                     src={Error} alt="Frame" />
                </div>
              
                <Location/>
            </div>
        </div>
    );
}

export default Not_Find;