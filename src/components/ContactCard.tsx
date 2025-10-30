import React from "react";
import "../styles.css";

interface ContactCardProps {
  show: boolean;
  onClose: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ show, onClose }) => {
  if (!show) return null; // hides when not visible

  return (
    <div className="contact-card show">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out for collaborations, freelance work, or any project discussions.
      </p>


      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <button className="close-btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ContactCard;
