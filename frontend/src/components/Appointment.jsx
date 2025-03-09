import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    gname: '',
    gmail: '',
    cname: '',
    cage: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    if (!formData.gname) newErrors.gname = 'Guardian Name is required';
    if (!formData.gmail) {
      newErrors.gmail = 'Guardian Email is required';
    } else if (!emailRegex.test(formData.gmail)) {
      newErrors.gmail = 'Please enter a valid email address';
    }
    if (!formData.cname) newErrors.cname = 'Child Name is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // Clear error for the field being edited
    setErrors({ ...errors, [e.target.id]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch('https://rising-stars-green.vercel.app/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Appointment booked successfully!');
        setFormData({ gname: '', gmail: '', cname: '', cage: '', message: '' });
        setErrors({});
      } else {
        setStatus('Failed to book appointment. Please try again.');
      }
    } catch (error) {
      setStatus('Error: Could not connect to the server.');
    }
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h1 className="mb-4">Make Appointment</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control border-0 ${errors.gname ? 'is-invalid' : ''}`}
                          id="gname"
                          placeholder="Guardian Name"
                          value={formData.gname}
                          onChange={handleChange}
                        />
                        <label htmlFor="gname">
                          Guardian Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        {errors.gname && <div className="invalid-feedback">{errors.gname}</div>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className={`form-control border-0 ${errors.gmail ? 'is-invalid' : ''}`}
                          id="gmail"
                          placeholder="Guardian Email"
                          value={formData.gmail}
                          onChange={handleChange}
                        />
                        <label htmlFor="gmail">
                          Guardian Email <span style={{ color: 'red' }}>*</span>
                        </label>
                        {errors.gmail && <div className="invalid-feedback">{errors.gmail}</div>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className={`form-control border-0 ${errors.cname ? 'is-invalid' : ''}`}
                          id="cname"
                          placeholder="Child Name"
                          value={formData.cname}
                          onChange={handleChange}
                        />
                        <label htmlFor="cname">
                          Child Name <span style={{ color: 'red' }}>*</span>
                        </label>
                        {errors.cname && <div className="invalid-feedback">{errors.cname}</div>}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="cage"
                          placeholder="Child Age"
                          value={formData.cage}
                          onChange={handleChange}
                        />
                        <label htmlFor="cage">Child Age</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className={`form-control border-0 ${errors.message ? 'is-invalid' : ''}`}
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: '100px' }}
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <label htmlFor="message">
                          Message <span style={{ color: 'red' }}>*</span>
                        </label>
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                  {status && <p className="mt-3 text-center">{status}</p>}
                </form>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src="/img/appointment.jpg"
                  style={{ objectFit: 'cover' }}
                  alt="Appointment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;