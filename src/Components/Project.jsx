// Project.jsx
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import '../../public/assets/styles/pro.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { client } from './js/prismic';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import Location from './LocationInfo';
import Taxi from './Taxi'; // Import the Taxi component
import '@fortawesome/fontawesome-free/css/all.min.css';
import { loadFull } from 'tsparticles';

const Project = () => {
 








  

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await client.getSingle('project');
        console.log(response); // Debug response
        setProjects(response.data.projects_group || []); // Ensure 'projects_group' is correctly set
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, []);

  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return <Taxi />; // Use Taxi component when projects are empty
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: false,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 2000,
        }
      }
    ]
  };

  return (
    <div className='page___'>
      <div className='main-container____'id='section_Project'>
        <div className='allCard' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
          <Link to="/" className="">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="card">
                <a className="card-link" href="#0">
                  <img className="card-img" src={project.image.url} alt={project.image.alt || 'Image of Project'} />
                  <div className="card-details">
                    <div>
                      <h3 className="card-title">{RichText.asText(project.title)}</h3>
                      <div className="card-content">{RichText.asText(project.paragraph)}</div>
                    </div>
                    <Link 
  to={project.link?.url || "#"} // Use project.link.url directly
  className="card-view-more text-black text-decoration-none" 
  target="_blank" 
  rel="noopener noreferrer"
>
  View more
  <svg width={24} height={24} viewBox="0 0 24 24">
    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
  </svg>
</Link>

                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <Location />
      </div>
    </div>
  );
};

export default Project;
