'use client'
import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Envoyez les données au serveur ici
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input type="hidden" name="csrf_token" value="0_token_csrf" />
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Nom</label>
        <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="object" className="block mb-2 text-sm font-medium text-gray-600">Objet</label>
        <input type="text" id="object" name="object" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
        <textarea id="message" name="message" rows="4" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <button type="submit" className="btn p-2 m-2 rounded-md focus:outline-none">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
