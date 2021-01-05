import React, { useState } from "react";
import Styles from "./contact.module.css";

import contact from "../../../assets/contact.jpg";
const defaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [values, setValues] = useState(defaultValues);

  // const handleChange = (value, name)=>{

  // };
  //                       event
  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const send = () => {
    console.log("values", values);
    setValues(defaultValues);
  };

  return (
    <div className={Styles.color}>
      
      <input
      className={Styles.input}
        type="text"
        placeholder="Your name"
        value={values.name}
        name="name"
        onChange={handleChange}
        // onChange={(event)=>handleChange(event.target.value, 'name')}
      />
      <input
        className={Styles.input}
        type="email"
        name="email"
        placeholder="Your email"
        value={values.email}
        onChange={handleChange}
      />
      <input
      className={Styles.input}
        type="phone"
        name="phone"
        placeholder="Your phone"
        value={values.phone}
        onChange={handleChange}
      />

      <textarea
        className={Styles.textarea}
        placeholder="Your message"
        name="message"
        onChange={handleChange}
        value={values.message}
      ></textarea>

      <button
      className={Styles.button} 
      onClick={send}>Send</button>
      <img src = {contact} alt="contact" className={Styles.img}/>
    </div>
  );
}

export default Contact;
