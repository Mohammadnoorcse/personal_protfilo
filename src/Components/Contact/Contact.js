import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();
    // const [done, setDone] = userState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c6uctra', 'template_9buqo7o', form.current, '46IfZXGGUxWbjOZwA')
      .then((result) => {
          console.log(result.text);
        //   setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "abf1ff94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form action="" ref={form} onSubmit ={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            id=""
            className="user"
            placeholder="Message"
          ></textarea>
                  <input type="submit" value="Send" className="button" />
                  {/* <span>{done && "Thanks for contactin me!"}</span> */}
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}
