import React from 'react';

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <form 
     className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Nom</label>
        <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Objet</label>
        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600">Message</label>
        <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
      </div>
      <button type="submit" className="btn p-2 m-2 rounded-md  focus:outline-none ">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;