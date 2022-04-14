import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7j8cqg3",
        "template_49q1pwe",
        form.current,
        "JavdGnz6ZKe6h2cgr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.contact} id="Contact">
      <div className={styles.cov}>
        <h3>Contact</h3>
        <p>Phone: 3714196430</p>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
          <label>Name</label>
          <input type="text" name="name" autoComplete="off" />
          <label>Email</label>
          <input type="email" name="user_email" autoComplete="off" />
          <label>Message</label>
          <textarea name="message" rows="5" cols="60" />
          <button type="submit" className={styles.formBtn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
