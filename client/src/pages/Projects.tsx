import React from 'react';

const Projects: React.FC = () => (
  <section id="projects" className="mt-5">
    <h2 className="text-center mb-5" style={{ color: 'black' }}>Projects</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/assets/images/Watermark.png'} className="card-img-top" alt="Omnifood" />
          <div className="card-body">
            <h5>Watermark Encryption and Decryption</h5>
            <p>A web application that allows users to encrypt and decrypt documents with a watermark.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/assets/images/portfolio.png'} className="card-img-top" alt="Natours" />
          <div className="card-body">
            <h5>Portfolio Website</h5>
            <p>A portfolio website that showcases my projects and skills.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 