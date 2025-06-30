import React, { useState } from 'react';

const Home: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    company: '',
    reason: ''
  });

  const handleResumeRequest = () => {
    setShowResumeModal(true);
  };

  const handlePermissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store the request in localStorage
    const resumeRequests = JSON.parse(localStorage.getItem('resumeRequests') || '[]');
    const newRequest = {
      ...contactInfo,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    resumeRequests.push(newRequest);
    localStorage.setItem('resumeRequests', JSON.stringify(resumeRequests));
    
    // Log to console (for development)
    console.log('Resume request:', newRequest);
    
    // Send email notification (you can customize this)
    sendEmailNotification(newRequest);
    
    setPermissionGranted(true);
  };

  const sendEmailNotification = (request: any) => {
    // You can replace this with your actual email service
    // For now, we'll use a simple mailto link
    const subject = 'New Resume Download Request';
    const body = `
New resume download request from your portfolio:

Name: ${request.name}
Email: ${request.email}
Company: ${request.company || 'Not provided'}
Reason: ${request.reason}
Timestamp: ${new Date(request.timestamp).toLocaleString()}

You can view all requests in your Contact page.
    `;
    
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const downloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = process.env.PUBLIC_URL + '/assets/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Shrirang_Amle_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeModal(false);
    setPermissionGranted(false);
    setContactInfo({ name: '', email: '', company: '', reason: '' });
  };

  return (
    <section id="home" className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button 
          onClick={handleResumeRequest}
          className="btn btn-primary btn-lg shadow-sm me-3"
          style={{
            borderRadius: '25px',
            padding: '12px 30px',
            fontWeight: '600',
            background: 'linear-gradient(180deg, #2c3e50 0%, #34495e 100%)',
            border: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <i className="fas fa-download me-2"></i>
          My Resume
        </button>
        <h1 className="mb-0 text-center flex-grow-1" style={{ color: '#111', fontWeight: 700 }}>
          Hello, I'm <strong>Shrirang!</strong>
        </h1>
        <img 
          src={process.env.PUBLIC_URL + '/assets/images/SAlogo.jpg'} 
          alt="SA Logo" 
          style={{ 
            maxHeight: '70px', 
            width: 'auto',
            filter: 'brightness(0.8) contrast(1.2) saturate(1.1)',
            mixBlendMode: 'multiply',
            opacity: 0.9,
            borderRadius: '50%',
            padding: '8px',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* Resume Permission Modal */}
      {showResumeModal && (
        <>
          <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
          <div className="modal fade show" style={{ display: 'block', zIndex: 1050 }} tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    <i className="fas fa-file-pdf text-danger me-2"></i>
                    Resume Download Request
                  </h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => {
                      setShowResumeModal(false);
                      setPermissionGranted(false);
                      setContactInfo({ name: '', email: '', company: '', reason: '' });
                    }}
                  ></button>
                </div>
                <div className="modal-body">
                  {!permissionGranted ? (
                    <div>
                      <p className="text-muted mb-4">
                        To download my resume, please provide your contact information and reason for the request. 
                        This helps me understand who's interested in my profile.
                      </p>
                      <form onSubmit={handlePermissionSubmit}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Full Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={contactInfo.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email Address *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={contactInfo.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="company" className="form-label">Company/Organization</label>
                          <input
                            type="text"
                            className="form-control"
                            id="company"
                            name="company"
                            value={contactInfo.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="reason" className="form-label">Reason for Request *</label>
                          <textarea
                            className="form-control"
                            id="reason"
                            name="reason"
                            rows={3}
                            value={contactInfo.reason}
                            onChange={handleInputChange}
                            placeholder="e.g., Job opportunity, collaboration, networking..."
                            required
                          ></textarea>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                          <button 
                            type="button" 
                            className="btn btn-secondary"
                            onClick={() => {
                              setShowResumeModal(false);
                              setPermissionGranted(false);
                              setContactInfo({ name: '', email: '', company: '', reason: '' });
                            }}
                          >
                            Cancel
                          </button>
                          <button type="submit" className="btn btn-primary">
                            <i className="fas fa-paper-plane me-2"></i>
                            Submit Request
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div className="text-center">
                      <i className="fas fa-check-circle text-success fa-3x mb-3"></i>
                      <h5 className="text-success mb-3">Permission Granted!</h5>
                      <p className="text-muted mb-4">
                        Thank you for providing your information. You can now download my resume.
                      </p>
                      <button 
                        onClick={downloadResume}
                        className="btn btn-success btn-lg"
                      >
                        <i className="fas fa-download me-2"></i>
                        Download Resume
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Intro Text Card */}
      <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
        <div className="mx-auto" style={{ maxWidth: 700 }}>
          <p className="fs-5 text-justify" style={{ textAlign: 'justify' }}>
            Welcome to my portfolio! I'm Shrirang Amle, a passionate Full Stack Web Developer with a strong background in building modern, responsive, and user-friendly web applications. I love turning ideas into reality using the latest technologies and best practices.
          </p>
          <p className="fs-5 text-justify" style={{ textAlign: 'justify' }}>
            With experience in both front-end and back-end development, I enjoy solving complex problems and collaborating with creative teams. My goal is to deliver high-quality solutions that make a real impact.
          </p>
          <p className="fs-5 text-justify mb-0" style={{ textAlign: 'justify' }}>
            Feel free to explore my projects, learn more about my skills and experience, or <a href="/contact" className="btn btn-link p-0 align-baseline">get in touch</a> if you have an exciting opportunity or just want to say hello!
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
        <h2 className="text-center mb-4">Technical Skills</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-bold">HTML5</span>
                <span>95%</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-success" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-bold">CSS3</span>
                <span>90%</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-info" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-bold">JavaScript</span>
                <span>85%</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-warning" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-bold">React.js</span>
                <span>80%</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-primary" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-bold">Node.js</span>
                <span>75%</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-dark" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-bold">MongoDB</span>
                <span>70%</span>
              </div>
              <div className="progress" style={{ height: '8px' }}>
                <div className="progress-bar bg-success" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programming Languages Section */}
      <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
        <h2 className="text-center mb-4">Programming Languages</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="text-center mb-3">
              <div className="mb-3">
                <i className="fas fa-code fa-3x text-primary"></i>
              </div>
              <h5 className="fw-bold">C</h5>
              <span className="badge bg-secondary">Basic</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center mb-3">
              <div className="mb-3">
                <i className="fas fa-code fa-3x text-primary"></i>
              </div>
              <h5 className="fw-bold">C++</h5>
              <span className="badge bg-secondary">Basic</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center mb-3">
              <div className="mb-3">
                <i className="fab fa-java fa-3x text-warning"></i>
              </div>
              <h5 className="fw-bold">Java</h5>
              <span className="badge bg-success">Advanced</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-center mb-3">
              <div className="mb-3">
                <i className="fab fa-python fa-3x text-info"></i>
              </div>
              <h5 className="fw-bold">Python</h5>
              <span className="badge bg-secondary">Basic</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <i className="fas fa-cube fa-2x text-success"></i>
            <h5>UI/UX Designer</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <i className="fas fa-palette fa-2x text-primary"></i>
            <h5>Web Designer</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <i className="fas fa-search fa-2x text-purple"></i>
            <h5>SEO Specialist</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home; 