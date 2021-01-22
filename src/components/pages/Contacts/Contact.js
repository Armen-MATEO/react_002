import React from "react";
import { connect } from "react-redux";
import { sendFormMessage } from "../../../store/action";
import Styles from "./contact.module.css";
import contact from "../../../assets/contact.jpg";

class Contact extends React.Component {
  state = {
    form: true,
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.sendFormSuccess && this.props.sendFormSuccess) {
      this.setState({
        name: "",
        email: "",
        message: "",
        phone: "",
        form: false,
      });
    }
  }

  check = () => {
    if (this.state.name && this.state.email && this.state.message) {
      this.setState({
        form: false,
      });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
    this.check();
  };

  send = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    if (!name || !email || !message) {
      this.setState({
        form: true,
      });
      return;
    }
    const formText = {
      name,
      email,
      message,
    };

    this.props.sendFormMessage(formText);
  };

  render() {
    return (
      <div className={Styles.color}>
        <input
          className={Styles.input}
          type="text"
          placeholder="Your name"
          value={this.state.name}
          name="name"
          required
          onChange={this.handleChange}
          // onChange={(event)=>handleChange(event.target.value, 'name')}
        />
        <span className={Styles.asterik}>*</span>
        <input
          className={Styles.input}
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={this.state.email}
          onChange={this.handleChange}
        />
        <span className={Styles.asterik}>*</span>
        <input
          className={Styles.input}
          type="phone"
          name="phone"
          placeholder="Your phone"
          required
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <span className={Styles.asterikBlack}>*</span>
        <div>
          <textarea
            className={Styles.textarea}
            placeholder="Your message"
            name="message"
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.message}
          ></textarea>
          <span className={Styles.asterik}>
            *<span className={Styles.text}>*required</span>{" "}
          </span>
        </div>

        <button type="button" className={Styles.button} onClick={this.send}>
          Send
        </button>
        <img src={contact} alt="contact" className={Styles.img} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sendFormSuccess: state.sendFormSuccess,
  };
};

const mapDispatchToProps = {
  sendFormMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
