import React, { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resumeRequests, setResumeRequests] = useState<any[]>([]);
  const [showRequests, setShowRequests] = useState(false);
  const [contactMessages, setContactMessages] = useState<any[]>([]);
  const [showMessages, setShowMessages] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);

  useEffect(() => {
    // Load resume requests from localStorage
    const requests = JSON.parse(localStorage.getItem('resumeRequests') || '[]');
    setResumeRequests(requests);
  }, []);

  const fetchContactMessages = async () => {
    setLoadingMessages(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`);
      const data = await response.json();
      setContactMessages(data);
    } catch (err) {
      console.error('Error fetching messages:', err);
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        // Refresh messages list
        fetchContactMessages();
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const deleteRequest = (id: number) => {
    const updatedRequests = resumeRequests.filter(req => req.id !== id);
    setResumeRequests(updatedRequests);
    localStorage.setItem('resumeRequests', JSON.stringify(updatedRequests));
  };

  const clearAllRequests = () => {
    setResumeRequests([]);
    localStorage.removeItem('resumeRequests');
  };

  const deleteMessage = async (id: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setContactMessages(prev => prev.filter(msg => msg._id !== id));
      }
    } catch (err) {
      console.error('Error deleting message:', err);
    }
  };

  return (
    <section id="contact" className="mt-5">
      <h2 className="text-center mb-5" style={{ color: 'black' }}>Contact Me</h2>
      
      {/* Contact Messages Section */}
      <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-success mb-0">
            <i className="fas fa-envelope me-2"></i>
            Contact Messages
          </h3>
          <div>
            <button 
              className="btn btn-outline-success btn-sm me-2"
              onClick={() => {
                if (!showMessages) {
                  fetchContactMessages();
                }
                setShowMessages(!showMessages);
              }}
            >
              {showMessages ? 'Hide' : 'Show'} Messages ({contactMessages.length})
            </button>
          </div>
        </div>
        
        {showMessages && (
          <div>
            {loadingMessages ? (
              <div className="text-center">
                <i className="fas fa-spinner fa-spin fa-2x text-primary"></i>
                <p className="mt-2">Loading messages...</p>
              </div>
            ) : contactMessages.length === 0 ? (
              <p className="text-muted text-center">No contact messages yet.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Message</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contactMessages.map((message) => (
                      <tr key={message._id}>
                        <td>{message.name}</td>
                        <td>
                          <a href={`mailto:${message.email}`} className="text-decoration-none">
                            {message.email}
                          </a>
                        </td>
                        <td>
                          <span className="text-truncate d-inline-block" style={{ maxWidth: '300px' }} title={message.message}>
                            {message.message}
                          </span>
                        </td>
                        <td>{new Date(message.createdAt).toLocaleDateString()}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteMessage(message._id)}
                            title="Delete message"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Resume Requests Section */}
      <div className="card p-4 mb-4 shadow-sm bg-white bg-opacity-75 border-0">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-primary mb-0">
            <i className="fas fa-file-pdf me-2"></i>
            Resume Download Requests
          </h3>
          <div>
            <button 
              className="btn btn-outline-primary btn-sm me-2"
              onClick={() => setShowRequests(!showRequests)}
            >
              {showRequests ? 'Hide' : 'Show'} Requests ({resumeRequests.length})
            </button>
            {resumeRequests.length > 0 && (
              <button 
                className="btn btn-outline-danger btn-sm"
                onClick={clearAllRequests}
              >
                Clear All
              </button>
            )}
          </div>
        </div>
        
        {showRequests && (
          <div>
            {resumeRequests.length === 0 ? (
              <p className="text-muted text-center">No resume requests yet.</p>
            ) : (
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Company</th>
                      <th>Reason</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resumeRequests.map((request) => (
                      <tr key={request.id}>
                        <td>{request.name}</td>
                        <td>
                          <a href={`mailto:${request.email}`} className="text-decoration-none">
                            {request.email}
                          </a>
                        </td>
                        <td>{request.company || '-'}</td>
                        <td>
                          <span className="text-truncate d-inline-block" style={{ maxWidth: '200px' }} title={request.reason}>
                            {request.reason}
                          </span>
                        </td>
                        <td>{new Date(request.timestamp).toLocaleDateString()}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteRequest(request.id)}
                            title="Delete request"
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Contact Form */}
      <div className="card p-4 shadow-sm bg-white bg-opacity-75 border-0">
        <h3 className="text-center mb-4">Get In Touch</h3>
        {submitted ? (
          <div className="alert alert-success text-center">
            Thank you for contacting me! Your message has been sent successfully.
            <button 
              className="btn btn-link p-0 ms-2"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="mt-3" style={{ maxWidth: 600, margin: '0 auto' }} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  name="name" 
                  placeholder="Your Name" 
                  value={form.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="col-md-6 mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  name="email" 
                  placeholder="Your Email" 
                  value={form.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea 
                className="form-control" 
                name="message" 
                placeholder="Your Message" 
                rows={4} 
                value={form.message} 
                onChange={handleChange} 
                required 
              />
            </div>
            {error && <div className="alert alert-danger py-2">{error}</div>}
            <div className="text-center">
              <button className="btn btn-primary btn-lg" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin me-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane me-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact; 