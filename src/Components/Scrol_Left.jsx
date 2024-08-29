import React, { useEffect,useState } from 'react';
import '../../public/assets/styles/scrolLeft.css';
import '../../public/assets/styles/lyout.css';
import Location from './LocationInfo';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mouse from '../../public/assets/images/Mouse Follower (1).png';
import Star from '../../public/assets/images/Star 1.png';
// import { tsParticles } from "tsparticles";

const Scrol_Left = () => {

  const titles = [
    "Full Stack Developer", 
    "Javascript",  
    "React Js", 
    "Node Js",  
           
];

const [text, setText] = useState(''); 
const [currentIndex, setCurrentIndex] = useState(0);  
const [isDeleting, setIsDeleting] = useState(false); 
const [charIndex, setCharIndex] = useState(0); 
const [speed, setSpeed] = useState(150);  

useEffect(() => {
    const handleTyping = () => {
        const currentTitle = titles[currentIndex];  

        if (isDeleting) {
          
            setText(currentTitle.substring(0, charIndex - 1));
            setCharIndex(charIndex - 1);
            setSpeed(50);  
        } else {
        
            setText(currentTitle.substring(0, charIndex + 1));
            setCharIndex(charIndex + 1);
            setSpeed(150);  
        }

        if (!isDeleting && charIndex === currentTitle.length) {
       
            setTimeout(() => setIsDeleting(true), 1000); 
        } else if (isDeleting && charIndex === 0) {
       
            setIsDeleting(false);
            setCurrentIndex((currentIndex + 1) % titles.length);  
        }
    };

    const typingInterval = setInterval(handleTyping, speed);

    return () => clearInterval(typingInterval);  
}, [charIndex, isDeleting, currentIndex, speed]);



  useEffect(() => {
    const dude = document.querySelector(".dude");
    const head = dude?.querySelector(".head");
    const legs = Array.from(dude?.querySelectorAll(".leg") || []);
    const arms = Array.from(dude?.querySelectorAll(".arm") || []);
    const legBottoms = Array.from(dude?.querySelectorAll(".leg-bottom") || []);
    const armBottoms = Array.from(dude?.querySelectorAll(".arm-bottom") || []);

    const content = document.querySelector(".content");
    const arrowEl = document.querySelector(".arrow-animated");

    if (!dude || !head || !legs.length || !arms.length || !legBottoms.length || !armBottoms.length || !content || !arrowEl) {
      console.error('One or more elements not found.');
      return;
    }

    gsap.set(arms, {
      svgOrigin: "180 58"
    });
    gsap.set(head, {
      svgOrigin: "180 45",
    });
    gsap.set(armBottoms, {
      svgOrigin: "178 118"
    });
    gsap.set(legs, {
      svgOrigin: "177 145",
    });
    gsap.set(legBottoms, {
      svgOrigin: "171 220"
    });

    const halfBodyTimeline = (leg, arm) => {
      const legBottom = leg.querySelector(".leg-bottom");
      const armBottom = arm.querySelector(".arm-bottom");

      return gsap.timeline({
        repeat: -1,
        paused: true
      })
        .fromTo(leg, {
          rotation: -25
        }, {
          duration: .5,
          rotation: 15,
          ease: "sine.inOut"
        }, 0)
        .to(leg, {
          duration: .25,
          rotation: -25,
          ease: "sine.in"
        }, ">")
        .to(legBottom, {
          duration: .25,
          rotation: 15,
          ease: "sine.inOut"
        }, .25)
        .to(legBottom, {
          duration: .25,
          rotation: 80,
          ease: "sine.in"
        }, ">")
        .to(legBottom, {
          duration: .25,
          rotation: 0,
          ease: "sine.out"
        }, ">")
        .fromTo(arm, {
          rotation: -12
        }, {
          duration: .5,
          rotation: 12,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1
        }, 0)
        .fromTo(armBottom, {
          rotation: -15
        }, {
          duration: .5,
          rotation: 10,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1
        }, 0)
    }

    const backCycle = halfBodyTimeline(legs[0], arms[1]);
    const frontCycle = halfBodyTimeline(legs[1], arms[0]);

    const bodyTimeline = gsap.timeline({
      paused: true,
    })
      .to(dude, {
        duration: .25,
        y: "-=20",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, 0)
      .fromTo(head, {
        rotation: -25
      }, {
        duration: .25,
        rotation: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, 0)

    const numberOfCycles = Math.ceil(3 * window.innerWidth / window.innerHeight)
    gsap.timeline({
      scrollTrigger: {
        trigger: ".page",
        scrub: true,
        start: "0% 0%",
        end: "100% 100%",
      },
    })
      .to(arrowEl, {
        duration: .05,
        opacity: 0
      }, 0)
      .fromTo(content, {
        xPercent: 0
      }, {
        xPercent: -50,
        easy: "none"
      }, 0)
      .fromTo(bodyTimeline, {
        time: .7
      }, {
        time: .75 + numberOfCycles
      }, 0)
      .fromTo(backCycle, {
        time: .7
      }, {
        time: .75 + numberOfCycles
      }, 0)
      .fromTo(frontCycle, {
        time: .2
      }, {
        time: .25 + numberOfCycles
      }, 0)

    window.addEventListener("resize", () => {
      ScrollTrigger.refresh();
    });

    // ---------------------------------------------
    // ONLY FOR CODEPEN PREVIEW

    gsap.set(window, {
      scrollTo: 0
    })
    gsap.timeline({})
      .to(window, {
        duration: 1,
        scrollTo: .0 * window.innerHeight,
        ease: "power1.inOut"
      });
  }, []);

 

  return (
    
    <div>
    
       
      <div className="page" />
  
      <div className="content">
     
        <div className="content-section" id='sestion_'>
    
          <div>
            {/* ================================================ */}
        
            <div>
                
                    <img className='mouse' src={Mouse} alt="Mouse Follower on Home Page" />
                </div>

                <div className='information_ '>
                    <div className='section_Im '>
                        <h3>Hi, I am</h3>
                    </div>

                    <div className="mt-3 section_Name slide-in"> {/* Added Bootstrap margin-top class */}
                        <h1>Amina Salik</h1>
                    </div>

                    <div className='d-flex web_ slide-in'>
            <div className="mr-3 dev_">
                <p>WEB DEVELOPER</p> 
            </div>

            <div className="mr-3 star_">
                <img src={Star} alt="star Follower on Home Page" />
            </div>

            <div className='UI_'>
                <p id="dynamic-text">{text}</p>
            </div>
        </div>
                </div>
              {/* ============================================================= */}
      <div className="scroll-prompt arrow-animated" scroll-prompt ng-show="showPrompt" style={{opacity: 1}}>
  <div className="scroll-prompt-arrow-container">
    <div className="scroll-prompt-arrow"><div /></div>
    <div className="scroll-prompt-arrow"><div /></div>
  </div>
</div>

           
          </div>
        </div>
        <div className="content-section f-flex"id='sestion'>
          
       <About/>
  
        </div>
       
      </div>
      <div className="">
    
        <svg viewBox="0 -10 315 350">
          <g className="dude" stroke="white" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" fill="none">
            <g className="leg">
              <path className="leg-bottom" d="M182,317l-10.4-2.8c-2.7-0.7-4.5-3.2-4.4-6c1.7-13,3-27,3.7-42.1c0.8-16.5,0.7-32,0.1-46.1" />
              <path d="M171,220l6-60" />
            </g>
            <g className="leg">
              <path className="leg-bottom" d="M182,317l-10.2-2.7c-2.8-0.8-4.7-3.4-4.6-6.3c-0.8-13.9-1-29.2-0.2-45.8c0.7-15.2,2.1-29.4,4-42.2" />
              <path d="M171,222c0.3-10,4.3-42,5.3-48" />
            </g>
            <g className="arm">
              <path d="M175,75c-0.6,8.7-0.6,18.9,0.8,30.1c0.6,4.6,1.3,8.9,2.2,12.9" />
              <path className="arm-bottom" d="M186,175c-0.2-3.1-0.4-6.2-0.7-9.3c-1.5-16.9-4.1-32.9-7.3-47.7" />
            </g>
            <g className="arm">
              <path d="M178.8,82.2c-1.9,13.1-1.8,25.2-0.8,35.8" />
              <path className="arm-bottom" d="M186,175c-2.4-7.6-4.7-16.8-6.3-27.2c-1.6-11.3-2-21.3-1.7-29.8" />
            </g>
            <path className="head" d="M195,14.8c-10.8-5.7-23.9,1.3-28.2,12.4c-4.9,13,6.3,28.4,17.8,29.1c13.2,0.8,22.2-16.1,19.5-26.7c-1.6-6.5-5.2-7.1-5.2-7.1" />
          </g>
        </svg>
      </div>
      <Location/>
    
    </div>
  );
};

export default Scrol_Left;
