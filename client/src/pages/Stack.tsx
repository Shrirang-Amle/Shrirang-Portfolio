import React from 'react';

const Stack: React.FC = () => (
  <section id="stack" className="mt-5">
    <h2 className="text-center mb-5">Technical Stack</h2>
    
    {/* Frontend Technologies */}
    <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
      <h3 className="text-center mb-4 text-primary">
        <i className="fas fa-palette me-2"></i>
        Frontend Technologies
      </h3>
      <div className="row text-center">
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-react fa-2x text-primary mb-2"></i>
            <p className="mb-0 fw-bold">React.js</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-html5 fa-2x text-danger mb-2"></i>
            <p className="mb-0 fw-bold">HTML5</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-css3-alt fa-2x text-info mb-2"></i>
            <p className="mb-0 fw-bold">CSS3</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-js-square fa-2x text-warning mb-2"></i>
            <p className="mb-0 fw-bold">JavaScript</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-bootstrap fa-2x text-primary mb-2"></i>
            <p className="mb-0 fw-bold">Bootstrap</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-sass fa-2x text-danger mb-2"></i>
            <p className="mb-0 fw-bold">SASS/SCSS</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-github fa-2x text-dark mb-2"></i>
            <p className="mb-0 fw-bold">Git/GitHub</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-mobile-alt fa-2x text-success mb-2"></i>
            <p className="mb-0 fw-bold">Responsive Design</p>
          </div>
        </div>
      </div>
    </div>

    {/* Backend Technologies */}
    <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
      <h3 className="text-center mb-4 text-success">
        <i className="fas fa-server me-2"></i>
        Backend Technologies
      </h3>
      <div className="row text-center">
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-node-js fa-2x text-success mb-2"></i>
            <p className="mb-0 fw-bold">Node.js</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-code fa-2x text-info mb-2"></i>
            <p className="mb-0 fw-bold">Express.js</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-database fa-2x text-warning mb-2"></i>
            <p className="mb-0 fw-bold">MongoDB</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-cloud fa-2x text-primary mb-2"></i>
            <p className="mb-0 fw-bold">RESTful APIs</p>
          </div>
        </div>
      </div>
    </div>

    {/* Development Tools */}
    <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
      <h3 className="text-center mb-4 text-info">
        <i className="fas fa-tools me-2"></i>
        Development Tools
      </h3>
      <div className="row text-center">
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-code-branch fa-2x text-dark mb-2"></i>
            <p className="mb-0 fw-bold">Git</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-terminal fa-2x text-success mb-2"></i>
            <p className="mb-0 fw-bold">VS Code</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fab fa-npm fa-2x text-danger mb-2"></i>
            <p className="mb-0 fw-bold">npm/yarn</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-search fa-2x text-warning mb-2"></i>
            <p className="mb-0 fw-bold">SEO</p>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Skills */}
    <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
      <h3 className="text-center mb-4 text-warning">
        <i className="fas fa-star me-2"></i>
        Additional Skills
      </h3>
      <div className="row text-center">
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-rocket fa-2x text-primary mb-2"></i>
            <p className="mb-0 fw-bold">Performance Optimization</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-shield-alt fa-2x text-success mb-2"></i>
            <p className="mb-0 fw-bold">Security Best Practices</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-users fa-2x text-info mb-2"></i>
            <p className="mb-0 fw-bold">Team Collaboration</p>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3">
          <div className="p-3 border rounded">
            <i className="fas fa-lightbulb fa-2x text-warning mb-2"></i>
            <p className="mb-0 fw-bold">Problem Solving</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Stack; 