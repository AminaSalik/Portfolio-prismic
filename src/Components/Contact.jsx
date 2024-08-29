import React, { useState, useEffect } from 'react';
import '../assets/styles/contentHome.css';
import Hm from '../assets/images/profil.png';
import AOS from 'aos';
import { loadFull } from 'tsparticles';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
import './js/contentHome';

const Contact = () => {
  useEffect(() => {
    const initParticles = async () => {
      await loadFull(tsParticles);

      tsParticles.load({
        id: "section",
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

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validity, setValidity] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, formState[name]);
  };

  const validateField = (name, value) => {
    let isValid = value.trim() !== '';

    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailPattern.test(value);
    }

    setValidity({ ...validity, [name]: isValid });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = formState;

    // Validate individual fields
    const isNameValid = validity.name;
    const isEmailValid = validity.email;
    const isMessageValid = validity.message;

    // Check for empty fields
    const isAnyFieldEmpty = !name || !email || !message;

    // Check if all fields are valid
    if (!isNameValid || !isEmailValid || !isMessageValid || isAnyFieldEmpty) {
      // Show a single toast message for missing fields
      toast.error("Please fill in all fields correctly.");
      return;
    }

    emailjs.sendForm('service_8x55t1g', 'template_ns3ljzk', e.target, 'aeA09BV8gXTdUDj0I')
      .then((result) => {
        console.log(result.text);
        toast.success("Email sent successfully!");
        setFormState({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
      }, (error) => {
        console.log(error.text);
        toast.error("Failed to send email. Please try again later.");
      });
  };

  const getInputClass = (name) => {
    if (!touched[name]) return '';
    return validity[name] ? 'is-valid' : 'is-invalid';
  };

  return (
    <div className='page_'>
      <Toaster />
      <section className="one" id='section'>
        <div>
          <div className="contact-Form">
            <div className="row section-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
              <div className="col-md-6 col-lg-6 form-column slide-in">
                <h1 className='Title' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="0">
                  LET´S MAKE <br />SOMETHING <br />AMAZING!
                </h1>
                <div className='d-flex info__' data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="600">
                  <div className="">
                    <img className="imghm" src={Hm} alt="Hm" />
                  </div>
                  <div className='information-per'>
                    <h2 className='title_Name'>Amina Salik</h2>
                    <h5 className='title_gmail'>Aminasalik012@gmail.com</h5>
                  </div>
                </div>
              </div>

              <div className="section-form col-md-6 text-column slide-in">
                <div className="form-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="400">
                  <form onSubmit={sendEmail}>
                    <div data-mdb-input-init className="form-outline mb-2">
                      <input
                        type="text"
                        id="form4Example1"
                        name="name"
                        className={`form-control custom-input ${getInputClass('name')}`}
                        placeholder="Name"
                        value={formState.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        id="form4Example2"
                        name="email"
                        className={`form-control custom-input ${getInputClass('email')}`}
                        placeholder="Email"
                        value={formState.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <textarea
                        className={`form-control custom-input ${getInputClass('message')}`}
                        id="form4Example3"
                        name="message"
                        rows={4}
                        placeholder="Message"
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    <button data-mdb-ripple-init type="submit" className="btn btn-block" id="contact-submit-btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
