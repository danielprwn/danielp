import React, { useState, useEffect } from 'react';
import "./contact.css"
import Form from './Form'

const Contact = () => {
  const [count, setCount] = useState(35000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='contact'>
      <div className="wrapper">
        <h3>{count.toLocaleString()} + already joined</h3>
        <p>Stay up-to-date with what we’re doing</p>
        <Form />
      </div>
    </div>
  )
}

export default Contact;
