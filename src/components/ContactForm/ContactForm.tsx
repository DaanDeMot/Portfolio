import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const SendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName == "" || userEmail == "" || userMessage == "") {
      alert(
        "Sorry, it looks like you missed something. Please check if you filled in everything correctly and try again."
      );
    } else {
      const ContactData = {
        user: userName,
        user_email: userEmail,
        message: userMessage,
      };
      emailjs
        .send(
          "service_vyju78n",
          "contact_form",
          ContactData,
          "wwTpIdI4kYmFPY2_v"
        )
        .then(
          (response) => {
            alert("Thank you " + userName + ". I wil reach out again ASAP.");
          },
          (err) => {
            alert(err);
          }
        );
      setUserEmail("");
      setUserMessage("");
      setUserName("");
    }
  };

  return (
    <form className={styles.form_container} onSubmit={(e) => SendEmail(e)}>
      <input type="hidden" name="contact_number"></input>.
      <div className={styles.input_container}>
      <div className={styles.left_container}>
        <div className={styles.form_row}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.name_input}
            value={userName}
            type="text"
            name="user_name"
            placeholder="Enter Name"
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>
        <div className={styles.form_row}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.email_input}
            value={userEmail}
            type="email"
            name="user_email"
            placeholder="Enter Email"
            onChange={(event) => setUserEmail(event.target.value)}
          ></input>
        </div>
        </div>
        <div className={styles.right_container}>
      <div className={styles.form_row}>
        <label className={styles.label}>Message</label>
        <textarea
          className={styles.message_input}
          value={userMessage}
          name="message"
          placeholder="Enter Message"
          onChange={(event) => setUserMessage(event.target.value)}
        ></textarea>
      </div>
      </div>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.submit_btn} type="submit" value="Send">
          Send
        </button>
      </div>
    </form>
  );
};
