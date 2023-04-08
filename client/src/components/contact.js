import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., send data to a server
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="container"
      style={{
        paddingTop: '60px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: '40px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 1)',
        borderRadius: '10px',
      }}
    >
      <h2>Contact Us</h2>
      <hr />
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input" // Add the className
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input" // Add the className
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            value={formData.message}
            onChange={handleChange}
            className="form-input" // Add the className
          ></textarea>
        </div>
        <input type="submit" value="Submit" className="button" />
      </form>
    </div>
  );
}

export default Contact;
