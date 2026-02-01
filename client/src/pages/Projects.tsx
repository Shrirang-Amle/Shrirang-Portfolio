import React from 'react';

const Projects: React.FC = () => (
  <section id="projects" className="mt-5">
    <h2 className="text-center mb-5" style={{ color: 'black' }}>Projects</h2>
    <div className="row">

      {/* Project 1 */}
      <div className="col-md-6 mb-4">
        <div className="card h-100">
          <img
            src={process.env.PUBLIC_URL + '/assets/images/Watermark.jpg'}
            className="card-img-top"
            alt="Watermark Project"
          />
          <div className="card-body">
            <h5>Watermark Encryption and Decryption</h5>
            <p>
              A web application that allows users to encrypt and decrypt
              documents securely using watermarking techniques.
            </p>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="col-md-6 mb-4">
        <div className="card h-100">
          <img
            src={process.env.PUBLIC_URL + '/assets/images/portfolio.png'}
            className="card-img-top"
            alt="Portfolio Website"
          />
          <div className="card-body">
            <h5>Portfolio Website</h5>
            <p>
              A personal portfolio website showcasing my projects, skills,
              and achievements.
            </p>
          </div>
        </div>
      </div>

      {/* Project 3 - KrishiSetu */}
      <div className="col-md-6 mb-4">
        <div className="card h-100">
          <img
            src={process.env.PUBLIC_URL + '/assets/images/krishisetu.png'}
            className="card-img-top"
            alt="KrishiSetu"
          />
          <div className="card-body">
            <h5>KrishiSetu</h5>
            <p>
              A smart agriculture support platform that helps farmers with
              crop guidance, market insights, and technology-driven solutions.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Projects;
