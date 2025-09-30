import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const sanitizeInput = (value) => { 
  return value.replace(/[<>/'"`]/g, '');
}

const initialState = {
  from_name: '',
  from_email: '',
  message: '',
};

export const Contact = (props) => {
  const [{ from_name, from_email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const sanitizedValue = sanitizeInput(value.trim());

    setState((prevState) => ({ ...prevState, [name]: sanitizedValue }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email regex validation
  }

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(from_email)) { 
      alert('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm(
        'service_ev7dk1v', 
        'template_phu79ol', 
        e.target, 
        'n9LRYNOKWwcBkr_u8'
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="contact">
      <div className="contact-container">
        <div id="contact">
          <h2 className="tagline">feel free to reach out!</h2>
          <p>
            Please fill out the form below to send me an email, or email me personally at{' '}
            <a href="mailto:bellebeaudry@gmail.com">bellebeaudry@gmail.com</a>. I will get back to you as soon as possible!
          </p>
        </div>
        <div className="form-container">
          <form name="sentMessage" validate onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                type="text"
                name="from_name"
                placeholder="your name"
                value={from_name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="from_email"
                placeholder="your email"
                value={from_email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="your message"
              value={message}
              onChange={handleChange}
              required
            />
            <div className="button">
              <button type="submit">send me an email!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
