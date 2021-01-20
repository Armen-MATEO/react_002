import React, { useState } from "react";
import Styles from "./contact.module.css";
import contact from "../../../assets/contact.jpg";

const apiUrl = process.env.REACT_APP_API_URL;


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
    //console.log("values", values);
    const body = JSON.stringify(values);
    
    
    fetch(`${apiUrl}/form`, {
      
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          throw response.error;
          
        }
       console.log(response);
       setValues(defaultValues);
        
      })
      .catch((error) => {
        console.log("error", error);
        
      });

       //setValues(defaultValues);
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

      <div>
        <textarea
          className={Styles.textarea}
          placeholder="Your message"
          name="message"
          onChange={handleChange}
          value={values.message}
        ></textarea>
      </div>

      <button type="button" className={Styles.button} onClick={send}>
        Send
      </button>
      <img src={contact} alt="contact" className={Styles.img} />
    </div>
  );
}

export default Contact;
