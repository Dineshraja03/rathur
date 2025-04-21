import { useEffect } from 'react';
// Import image directly from public folder
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
      (card as HTMLElement).addEventListener('mousemove', (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        (card as HTMLElement).style.setProperty('--rotateX', `${rotateX}deg`);
        (card as HTMLElement).style.setProperty('--rotateY', `${rotateY}deg`);
      });
      
      card.addEventListener('mouseleave', () => {
        (card as HTMLElement).style.setProperty('--rotateX', '0');
        (card as HTMLElement).style.setProperty('--rotateY', '0');
      });
    });
  }, []);

  useEffect(() => {
    const container = document.querySelector('.projects-container');
    const cards = document.querySelectorAll('.project-card');
    
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        // Calculate distance between mouse and card center
        const deltaX = mouseX - cardCenterX;
        const deltaY = mouseY - cardCenterY;
        
        // Calculate rotation angle (more responsive values)
        const rotateX = deltaY / -15;
        const rotateY = deltaX / 15;
        
        // Apply transform with enhanced 3D effect
        (card as HTMLElement).style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg) 
          translateZ(50px)
          scale3d(1.05, 1.05, 1.05)
        `;
      });
    };
    
    const handleMouseLeave = () => {
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = `
          perspective(1000px) 
          rotateX(0) 
          rotateY(0) 
          translateZ(0)
          scale3d(1, 1, 1)
        `;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    container?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleGetInTouch = () => {
    const whatsappUrl = 'https://wa.me/919659321676';
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = () => {
    // Add your resume file to the public folder and update the path
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Jairathur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home">
      <nav className="top-nav">
        <div className="nav-content">
          <div className="nav-left">
            <a href="#home" className="name">JAIRATHUR T</a>
          </div>
          <div className="nav-right">
            <a href="#about">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#education">EDUCATION</a>
            <a href="#internship">INTERNSHIP</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </nav>
      <main className="main-content">
        <section className="profile-section">
          <div className="profile-wrapper">
            <div className="profile-image-container">
              <img 
                src="profile.jpg" 
                alt="Jairathur T" 
                className="profile-image"
                onError={(e) => console.error('Image failed to load:', e)}
              />
            </div>
            <h1>JAIRATHUR T</h1>
            <h2>WEB DEVELOPER & VIDEO EDITOR</h2>
            <h3 className="education">B.Com (CA) Student</h3>
            <div className="cta-buttons">
              <button 
                className="btn-primary" 
                onClick={handleGetInTouch}
                aria-label="Contact on WhatsApp"
              >
                GET IN TOUCH
              </button>
              <button className="btn-secondary" onClick={handleDownloadResume}>DOWNLOAD RESUME</button>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h3>About Me</h3>
          <p>
            I am a B.Com (Computer Application) student passionate about web development 
            and video editing. Combining my academic studies with technical skills, 
            I create modern web applications and compelling video content.
          </p>
        </section>

        <section id="skills" className="skills-section">
          <h3>Skills</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4>Web Development</h4>
              <ul className="skills-list">
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Programming</h4>
              <ul className="skills-list">
                <li>Java</li>
                <li>C Programming</li>
                <li>C++</li>
                <li>Version Control (Git)</li>
                <li>Database Basics</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Video Editing</h4>
              <ul className="skills-list">
                <li>Adobe Premiere Pro</li>
                <li>After Effects</li>
                <li>Color Grading</li>
                <li>Motion Graphics</li>
                <li>Audio Editing</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Professional Skills</h4>
              <ul className="skills-list">
                <li>MS Office Suite</li>
                <li>Communicative English</li>
                <li>AI Tools</li>
                <li>Green Skills</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="education-section">
          <h3>Education</h3>
          <div className="education-card">
            <h4>Bachelor of Commerce (Computer Applications)</h4>
            <p className="college-name">Arulmigu Palaniandavar College of Arts and Culture, Palani</p>
            <p className="year">2025 - Present</p>
            <ul className="education-details">
              <li>Currently pursuing B.Com (CA)</li>
              <li>Specializing in Computer Applications</li>
              <li>Core subjects: Programming, Database Management, Web Development</li>
            </ul>
          </div>
        </section>

        <section id="internship" className="internship-section">
          <h3>Internship</h3>
          <div className="internship-card">
            <h4>Industrial Training</h4>
            <p className="company-name">Sri Packing Machinery</p>
            <p className="company-location">Sriramapuram, Dindigul Road</p>
            <p className="intern-duration">2024</p>
            <ul className="internship-details">
              <li>Gained hands-on experience in industrial assembly operations</li>
              <li>Learned about packing machinery systems and processes</li>
              <li>Participated in manufacturing and assembly workflows</li>
              <li>Observed industrial automation and machinery operations</li>
            </ul>
          </div>
        </section>

        <section id="certificates" className="certificates-section">
          <h3>Certificates</h3>
          <div className="certificate-card">
            <h4>Professional Certifications</h4>
            <ul className="certificate-details">
              <li>
                <span className="cert-name">Advanced Diploma in Java Programming (ADJP)</span>
                <span className="cert-issuer">CSC (Computer Software College)</span>
              </li>
              <li>
                <span className="cert-name">Industrial Training Certificate</span>
                <span className="cert-issuer">Sri Packing Machinery</span>
              </li>
              <li>
                <span className="cert-name">Certificate in Computer Operating System</span>
                <span className="cert-issuer">Bharathiar University</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h3>Projects</h3>
          <div className="projects-container">
            <a href="https://your-portfolio-url.com" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-icon">🎯</div>
              <h4>Portfolio Website</h4>
              <p className="project-description">
                Personal portfolio website built with React.js and modern CSS animations.
                Features responsive design and smooth transitions.
              </p>
              <span className="more-info">MORE INFO</span>
            </a>

            <a href="https://www.instagram.com/_erenix_/reel/DIWQ-sUTsB9/" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-icon">🎬</div>
              <h4>Video Editing</h4>
              <p className="project-description">
                Professional video editing projects using Adobe Premiere Pro.
                Includes motion graphics and color grading.
              </p>
              <span className="more-info">MORE INFO</span>
            </a>

            <a href="https://jai-kappa.vercel.app/index.html" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-icon">💻</div>
              <h4>Web Application</h4>
              <p className="project-description">
                Interactive web application developed using modern technologies.
                Features user authentication and database integration.
              </p>
              <span className="more-info">MORE INFO</span>
            </a>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h3>Contact</h3>
          <div className="contact-card">
            <ul className="contact-details">
              <li><span>jairathur04@gmail.com</span></li>
              <li>+91 96593 21676</li>
              <li>Palani, Tamil Nadu, India</li>
            </ul>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/jai-rathur-7b6452295/" target="_blank" rel="noopener noreferrer">
                LINKEDIN <span>↗</span>
              </a>
              <a href="https://github.com/Jairathur" target="_blank" rel="noopener noreferrer">
                GITHUB <span>↗</span>
              </a>
              <a href="https://wa.me/919659321676" target="_blank" rel="noopener noreferrer">
                WHATSAPP <span>↗</span>
              </a>
              <a href="https://www.instagram.com/_erenix_/" target="_blank" rel="noopener noreferrer">
                INSTAGRAM <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <div className="email-banner">
          <div className="email-scroll">
            <span>jairathur04@gmail.com</span>
            <span>jairathur04@gmail.com</span>
            <span>jairathur04@gmail.com</span>
            <span>jairathur04@gmail.com</span>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>Privacy Policy</p>
            <p>Accessibility Statement</p>
          </div>
          <div className="footer-right">
            <p>© 2025 by JAIRATHUR T. Built with React</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;