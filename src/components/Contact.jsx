import React, { useState } from "react";
import { CONTACT } from "../constants";
import { animate, motion } from "framer-motion";
import ContactForm from "./ContactFourm";

const Contact = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleOpenContactForm = () => setIsContactFormOpen(true);
  const handleCloseContactForm = () => setIsContactFormOpen(false);

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleOpenContactForm();
          }}
          className="border-b"
        >
          {CONTACT.email}
        </a>
        <ContactForm
          isOpen={isContactFormOpen}
          onClose={handleCloseContactForm}
        />
      </div>
    </div>
  );
};
export default Contact;
