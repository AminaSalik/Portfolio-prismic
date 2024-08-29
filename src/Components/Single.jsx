import React, { useEffect,useState } from 'react';
import '../assets/styles/Single.css';
import "./js/project"
import AOS from 'aos'
import { RichText } from 'prismic-reactjs';
import { client } from './js/prismic';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import Frame1 from '../assets/images/Frame 1.png';
import Frame2 from '../assets/images/Frame 21.png';
import Frame from '../assets/images/1.jpg';
import Fram3 from '../assets/images/javascript-voyage-slider-image1.png';
import Frame4 from '../assets/images/pure-css-coverflow-slider.png.png';
import 'bootstrap/dist/css/bootstrap.min.css';


function Single() {
    const images = [Frame ,Fram3,Frame4 ]; // Add your images here
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); 

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    const [singleData, setSingleData] = useState(null);
    useEffect(() => {
        const fetchAboutData = async () => {
          try {
            const response = await client.getSingle('single');
            setSingleData(response.data);
          } catch (error) {
            console.error("Error fetching About data:", error);
          }
        };
    
        fetchAboutData();
        
      }, []);
    
      if (!singleData) {
        return <div>Loading...</div>;
      }
    return (
        <>
    <div className=' Single_Project setion  d-flex ' >
        <div className='section_Project'>
            <Link to="/project" className='btn_View text-decoration-none'>
                View Project
            </Link>

            <img className='img_Projct slide-in' src={images[currentIndex]} alt="Project Image - Restoring Humanity Theme" />
        </div>

    <div className='info_ slide-in' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<h1 className='title_ '>   {RichText.asText(singleData.title)}</h1>
<p className='description_'> {RichText.asText(singleData.paragraph)}.</p>




<p className='Tech_'>Tech Use:</p>
<div className='btns'>
<a href="https://github.com/AminaSalik" target="_blank" rel="noopener noreferrer">
    <button className="btn_Figma">GitHub</button>
</a>

<a href="https://www.linkedin.com/in/amina-salik-b09a5022b/" target="_blank" rel="noopener noreferrer">
    <button className="btn_wordpress">LinkedIn</button>
</a>

</div>
  
    </div>
    
</div>       
        </>
    );
}

export default Single;
