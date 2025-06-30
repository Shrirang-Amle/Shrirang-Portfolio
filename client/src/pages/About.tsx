import React from 'react';

const About: React.FC = () => (
  <section id="about" className="mt-5">
    <h2 className="text-center mb-5">About Me</h2>
    
    {/* Personal Introduction */}
    <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
      <div className="row align-items-center">
        <div className="col-md-8">
          <h3 className="mb-3">Who I Am</h3>
          <p className="fs-5 text-justify" style={{ textAlign: 'justify' }}>
            I'm a passionate Full Stack Web Developer with a strong foundation in both front-end and back-end technologies. 
            My journey in web development started with curiosity and has evolved into a deep passion for creating 
            innovative digital solutions that make a real impact.
          </p>
          <p className="fs-5 text-justify" style={{ textAlign: 'justify' }}>
            I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. 
            My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
          </p>
        </div>
        <div className="col-md-4 text-center">
          <div className="p-4">
            <i className="fas fa-code fa-4x text-primary mb-3"></i>
            <h5 className="text-muted">Passionate Developer</h5>
          </div>
        </div>
      </div>
    </div>

    {/* Education & Experience Grid */}
    <div className="row">
      {/* Education */}
      <div className="col-md-6 mb-4">
        <div className="card h-100 p-4 shadow-sm bg-white bg-opacity-75 border-0">
          <h3 className="text-center mb-4 text-primary">
            <i className="fas fa-graduation-cap me-2"></i>
            Education
          </h3>
          <div className="timeline">
            <div className="timeline-item mb-4">
              <div className="timeline-marker bg-primary"></div>
              <div className="timeline-content">
                <h5 className="fw-bold">BTech in Computer Engineering</h5>
                <p className="text-muted mb-1">Vishwakarma Institute of Technology, Pune</p>
                <p className="text-muted mb-0">2024 - 2027</p>
              </div>
            </div>
            <div className="timeline-item mb-4">
              <div className="timeline-marker bg-success"></div>
              <div className="timeline-content">
                <h5 className="fw-bold">Diploma in Computer Engineering</h5>
                <p className="text-muted mb-1">Government Polytechnic, Khamgaon</p>
                <p className="text-muted mb-0">2021 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="col-md-6 mb-4">
        <div className="card h-100 p-4 shadow-sm bg-white bg-opacity-75 border-0">
          <h3 className="text-center mb-4 text-success">
            <i className="fas fa-briefcase me-2"></i>
            Experience
          </h3>
          <div className="timeline">
            <div className="timeline-item mb-4">
              <div className="timeline-marker bg-warning"></div>
              <div className="timeline-content">
                <h5 className="fw-bold">Full Stack Developer</h5>
                <p className="text-muted mb-1">Freelance & Personal Projects</p>
                <p className="text-muted mb-0">2023 - Present</p>
                <p className="small mt-2">Building responsive web applications using modern technologies</p>
              </div>
            </div>
            <div className="timeline-item mb-4">
              <div className="timeline-marker bg-info"></div>
              <div className="timeline-content">
                <h5 className="fw-bold">Web Development Intern</h5>
                <p className="text-muted mb-1">Various Projects</p>
                <p className="text-muted mb-0">2022 - 2023</p>
                <p className="small mt-2">Gained hands-on experience with front-end and back-end development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Skills & Interests */}
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card h-100 p-4 shadow-sm bg-white bg-opacity-75 border-0">
          <h3 className="text-center mb-4 text-info">
            <i className="fas fa-cogs me-2"></i>
            Technical Skills
          </h3>
          <div className="row text-center">
            <div className="col-6 mb-3">
              <i className="fas fa-mobile-alt fa-2x text-primary mb-2"></i>
              <p className="mb-0 fw-bold">Responsive Design</p>
            </div>
            <div className="col-6 mb-3">
              <i className="fas fa-rocket fa-2x text-success mb-2"></i>
              <p className="mb-0 fw-bold">Performance Optimization</p>
            </div>
            <div className="col-6 mb-3">
              <i className="fas fa-shield-alt fa-2x text-warning mb-2"></i>
              <p className="mb-0 fw-bold">Security Best Practices</p>
            </div>
            <div className="col-6 mb-3">
              <i className="fas fa-users fa-2x text-info mb-2"></i>
              <p className="mb-0 fw-bold">Team Collaboration</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card h-100 p-4 shadow-sm bg-white bg-opacity-75 border-0">
          <h3 className="text-center mb-4 text-warning">
            <i className="fas fa-heart me-2"></i>
            Interests & Hobbies
          </h3>
          <div className="row text-center">
            <div className="col-6 mb-3">
              <i className="fas fa-book fa-2x text-primary mb-2"></i>
              <p className="mb-0 fw-bold">Learning New Tech</p>
            </div>
            <div className="col-6 mb-3">
              <i className="fas fa-gamepad fa-2x text-success mb-2"></i>
              <p className="mb-0 fw-bold">Reading Tech Blogs</p>
            </div>
            <div className="col-6 mb-3">
              <i className="fas fa-music fa-2x text-warning mb-2"></i>
              <p className="mb-0 fw-bold">Drawing</p>
            </div>
            <div className="col-6 mb-3">
              <i className="fas fa-camera fa-2x text-info mb-2"></i>
              <p className="mb-0 fw-bold">Photography</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About; 