import React from 'react';

const Projects: React.FC = () => (
  <section id="projects" className="mt-5">
    <h2>Projects</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/assets/images/omni.jpg'} className="card-img-top" alt="Omnifood" />
          <div className="card-body">
            <h5>Omnifood</h5>
            <p>Revolutionizing Personalized Meal Delivery</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/assets/images/natours.jpg'} className="card-img-top" alt="Natours" />
          <div className="card-body">
            <h5>Natours</h5>
            <p>Adventure Travel Web Solutions</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects; 