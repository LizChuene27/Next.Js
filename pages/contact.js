// pages/contact.js
import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  // Your actual phone number
  const phoneNumber = '078932342';

  // Random address in Cape Town, South Africa
  const address = `123 Main Street, Cape Town, South Africa`;

  // Contact email address
  const email = `lizchuene@gmail.com`;

  return (
    <Layout>
      <div>
        <h1>Contact Us</h1>
        <p>If you'd like to get in touch, you can reach me through the following channels:</p>
        <ul>
          <li>
            <strong>Phone:</strong> {phoneNumber}
          </li>
          <li>
            <strong>Address:</strong> {address}
          </li>
          <li>
            <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default ContactPage;
