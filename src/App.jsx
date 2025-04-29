import React, { useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const apiUrl = process.env.REACT_APP_API_URL;
const defaultFormData = {
  name: '',
  email: '',
  message: '',
};

const Portfolio = () => {
  const [formData, setFormData] = useState({...defaultFormData});

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
        setFormData({...defaultFormData}); 
      })
      .catch((err) => {
        console.error('Error submitting form:', err);
        alert('Failed to submit form.');
      });
  };

  useEffect(() => {
    const tabLinks = document.getElementsByClassName('tab-links');
    const tabContents = document.getElementsByClassName('tab-contents');
  
    window.opentab = (tabname, event) => {
      for (let tablink of tabLinks) {
        tablink.classList.remove('active-link');
      }
      for (let tabcontent of tabContents) {
        tabcontent.classList.remove('active-tab');
      }
      event.currentTarget.classList.add('active-link');
      document.getElementById(tabname).classList.add('active-tab');
    };
  
    window.openmenu = () => {
      document.getElementById('sidemenu').style.right = '0';
    };
    window.closemenu = () => {
      document.getElementById('sidemenu').style.right = '-200px';
    };
  }, []);

  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <img src="images/sun logo.png" className="logo" alt="logo" />
            <ul id="sidemenu">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <i className="fas fa-times" onClick={() => window.closemenu()}></i>
            </ul>
            <i className="fas fa-bars" onClick={() => window.openmenu()}></i>
          </nav>
          <div className="header-text">
            <p className="ai">AI/ML Engineer</p>
            <h1> Hi, I'm <span> Suraj </span><br />Nagre from India</h1>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="images/cropp.jpg" alt="about" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title"> About Me </h1>
              <p>Aspiring AI/ML Engineer with hands-on experience in AI-driven applications and cloud deployment...</p>

              <div className="tab-titles">
                <p className="tab-links active-link" onClick={(e) => window.opentab('skills', e)}> Skills </p>
                <p className="tab-links" onClick={(e) => window.opentab('experience', e)}> Experience </p>
                <p className="tab-links" onClick={(e) => window.opentab('education', e)}> Education </p>
              </div>
              <div className="tab-contents active-tab" id="skills">
                <ul>
                  <li><span>Artificial Intelligence</span><br />Working on AI Algorithms</li>
                  <li><span>Machine Learning</span><br />Implementing solution of ML in real-world</li>
                  <li><span>AI Agents</span><br />Designing and Creating Agentic Workflow</li>
                </ul>
              </div>
              <div className="tab-contents" id="experience">
                <ul>
                  <li><span>March 2025 - Present</span><br />AI/ML Intern at Donatekart, Banglore</li>
                  <li><span>Sept 2024 - Feb 2025</span><br />AI/ML Application Development Intern at NxTechWorks, Pune</li>
                  <li><span>July 2023 - May 2024</span><br />Google Developer Student Clubs Lead</li>
                </ul>
              </div>
              <div className="tab-contents" id="education">
                <ul>
                  <li><span>B.Tech 2021-2025</span><br />AIML from MGM University</li>
                  <li><span>HSC 2019-2021</span><br />Deogiri Junior College</li>
                  <li><span>SSC 2008-2019</span><br />Aurangabad Police Public School</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services">
        <div className="container">
          <h1 className="sub-title">My Services</h1>
          <div className="services-list">
            <div>
              <i className="fa fa-code"></i>
              <h2>Artificial Intelligence</h2>
              <p> Worked on various projects like Predictive Maintenance, Content Generation, RAG Models, etc.</p>
              <a href="">Learn more</a>
            </div>
            <div>
              <i className="fas fa-crop-alt"></i>
              <h2>Machine Learning</h2>
              <p> Implementing real world solutions with the machinery approach</p>
              <a href="">Learn more</a>
            </div>
            <div>
              <i className="fab fa-app-store"></i>
              <h2>AI Agents</h2>
              <p>Creating workflows on n8n and Implementing on real world problems...</p>
              <a href="">Learn more</a>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src="images/image.png" alt="work" />
              <div className="layer">
                <h3>Document Reader Agent</h3>
                <p>Developed an AI using LangChain which can read the document and answer the questions</p>
                <a href="https://github.com/kurai-sx/PDF-Reader-AI-Agent"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="work">
              <img src="images/gan.png" alt="gan" />
              <div className="layer">
                <h3>Fashion GAN System</h3>
                <p>This GAN can generate fashionable clothes within the neural network</p>
                <a href="https://github.com/kurai-sx/Building-Generative-Adversarial-Network-GAN"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="work">
              <img src="images/Chillcabs Logo.png" alt="cab app" />
              <div className="layer">
                <h3>Chill Cabs App</h3>
                <p>A Cab Booking Platform with real time tracking and payment integration</p>
                <a href="https://github.com/kurai-sx/Chill-Cabs"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
          <a href="" className="btn">See more</a>
        </div>
      </div>

      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p><i className="fas fa-paper-plane"></i> surajnagre30@gmail.com</p>
              <p><i className="fas fa-phone-square-alt"></i> +91 7558697774</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/surajnagre/"> <i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/snxtyle/"> <i className="fab fa-instagram"></i></a>
                <a href="https://github.com/kurai-sx"> <i className="fab fa-github"></i></a>
              </div>
              <a href="images/SurajNagreResume New.pdf" download className="btn btn2">Download CV</a>
            </div>
            <div className="contact-right">
              <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                <textarea name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn2">Submit</button>
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © Suraj. <i className="fas fa-heart"></i> All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
