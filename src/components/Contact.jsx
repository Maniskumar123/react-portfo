import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from 'emailjs-com'; // Ensure the correct import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    ).then((result) => {
      alert("Message sent successfully!");
    }).catch((error) => {
      alert("An error occurred. Please try again.");
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-20 px-4">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center tracking-tighter"
      >
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
        <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto">
          <div className="my-4">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your Name" 
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="my-4">
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Your Email" 
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="my-4">
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Your Message" 
              className="border p-2 w-full rounded"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
        <div className="mt-4">
          <a 
            href={`https://wa.me/${8093827634}?text=Hi, I would like to get in touch with you`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-b"
          >
            Message on WhatsApp
          </a>
        </div>
      </motion.div>
      <footer className="mt-10 text-center text-neutral-600">
        © Manish Kumar Sharma, 2024
      </footer>
    </div>
  );
};

export default Contact;
