// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data for debugging
    console.log(formData);

    // Send email using EmailJS
    emailjs.send(
      'service_l476gx8', // Your Service ID (EmailJS)
      'template_qzes9c3', // Your Template ID (EmailJS)
      {
        name: formData.name,        // Name field value
        email: formData.email,      // Email field value
        message: formData.message   // Message field value
      },
      'Vmd2B57izGj51Tw4q'  // Your Public Key (EmailJS)
    )
    .then((result) => {
      // Log the result and show success alert
      console.log('Email sent successfully:', result);
      alert('Email sent successfully!');
    }, (error) => {
      // Log the error and show failure alert
      console.log('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    });

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
