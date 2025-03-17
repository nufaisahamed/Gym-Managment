import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Get in Touch</h2>
          <ul className="space-y-4 text-gray-600">
            <li>
              <strong>Email:</strong> nufaist37@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> 974400****
            </li>
            <li>
              <strong>Address:</strong> malappuram , kerala, india
            </li>
            <li>
              <strong>CEO:</strong> Nufais ahamed
            </li>
          </ul>
        </div> 
      </div>
    </div>
  );
};

export default ContactPage;