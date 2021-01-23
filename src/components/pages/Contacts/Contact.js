import React from "react";
import { connect } from "react-redux";
import { sendFormMessage } from "../../../store/action";
import Styles from "./contact.module.css";
import contact from "../../../assets/contact.jpg";
import { Form, Button } from "react-bootstrap";

class Contact extends React.Component {
  state = {
    form: true,
    name: "",
    email: "",
    message: "",
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.sendFormSuccess && this.props.sendFormSuccess) {
      this.setState({
        name: "",
        email: "",
        message: "",

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
      <>
        <Form inline className={Styles.color}>
          
        
          <Form.Control
            className={Styles.input}
            type="text"
            placeholder="Your name"
            value={this.state.name}
            name="name"
            required
            onChange={this.handleChange}
          />
          

          <Form.Control
            type="email"
            placeholder="Enter email"
            className={Styles.input}
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />

          <Form.Control
            as="textarea"
            rows={2}
            placeholder=" message"
            name="message"
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.message}
            className={Styles.textArea}
          />
          

          <Button
            variant="primary"
            type="submit"
            className={Styles.but}
            onClick={this.send}
          >
            Submit
          </Button>
          <img src={contact} alt="contact" className={Styles.img} />
        </Form>
      </>
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
