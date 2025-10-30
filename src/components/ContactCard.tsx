import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles.css";

interface ContactCardProps {
  show: boolean;
  onClose: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ show, onClose }) => {
  const form = useRef<HTMLFormElement>(null);

  if (!show) return null;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y1mfa7e",     // from EmailJS dashboard
        "template_evk5ynv",    // from EmailJS dashboard
        form.current!,
        "K4Gfm1p8a-sg2NxVO"      // from EmailJS account
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-card show">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for collaborations, freelance work, or any project discussions.</p>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <button className="close-btn" onClick={onClose}>Close</button>
    </div>
  );
};

export default ContactCard;
