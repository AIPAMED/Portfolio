import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles.css";

interface ContactCardProps {
  show: boolean;
  onClose: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ show, onClose }) => {
  const form = useRef<HTMLFormElement>(null);
  const [alertMsg, setAlertMsg] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  if (!show) return null;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y1mfa7e",
        "template_evk5ynv",
        form.current!,
        "K4Gfm1p8a-sg2NxVO"
      )
      .then(
        () => {
          setIsError(false);
          setAlertMsg("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setIsError(true);
          setAlertMsg("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-card show">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out for collaborations, freelance work, or any project discussions.
      </p>

      <form ref={form} className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={4} required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <button className="close-btn" onClick={onClose}>
        Close
      </button>

      {/* Custom centered alert */}
      {alertMsg && (
        <div className={`custom-alert ${isError ? "error" : "success"}`}>
          <p>{alertMsg}</p>
          <button onClick={() => setAlertMsg(null)}>OK</button>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
