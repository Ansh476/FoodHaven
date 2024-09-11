import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <form action="">
        <label>Name</label>
        <input type="text" placeholder="name" />
        <label>Phone</label>
        <input type="number" placeholder="phone" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
