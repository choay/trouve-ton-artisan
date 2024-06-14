'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3de4w5p', 'template_p5sl99c', form.current, {
        publicKey: 'UJam3RW92FH3dCNkb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
      <input type="hidden" name="csrf_token" value="0_token_csrf" />
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Nom</label>
        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
        <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="object" className="block mb-2 text-sm font-medium text-gray-600">Objet</label>
        <input type="text" id="object" name="object" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
        <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <button type="submit" value="Send" className="btn p-2 m-2 rounded-md focus:outline-none">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
