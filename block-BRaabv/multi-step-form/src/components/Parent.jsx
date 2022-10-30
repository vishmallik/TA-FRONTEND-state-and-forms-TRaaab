/* eslint-disable no-useless-escape */
import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      f_name: "",
      l_name: "",
      dob: "",
      email: "",
      address: "",
      message: "",
      choice: "",
      choice1: "",
      choice2: "",
      choice3: "",
      errors: {
        email: "",
      },
    };
  }
  isEmail = (email) => {
    // eslint-disable-next-line no-control-regex
    return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
      email
    );
  };
  onChange = (event) => {
    console.dir(event.target.value);
    let { name, value } = event.target;
    let errors = this.state.errors;
    if (name === "email") {
      errors.email = this.isEmail(value) ? "" : "Email is invalid";
    }
    this.setState({
      ...this.state,
      [name]: value,
      errors,
    });
  };
  _next = (cb) => {
    if (this.state.step <= 2) {
      return <button onClick={cb}>Next Step</button>;
    }
  };
  _prev = (cb) => {
    if (this.state.step >= 2) {
      return <button onClick={cb}>Back</button>;
    }
  };
  handleNext = () => {
    let step = this.state.step;
    if (step <= 2) {
      step = step + 1;
    }
    this.setState({
      step,
    });
  };
  handleBack = () => {
    let step = this.state.step;
    if (step > 1) {
      step = step - 1;
    }
    this.setState({
      step,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let {
      address,
      choice,
      choice1,
      choice2,
      choice3,
      dob,
      email,
      f_name,
      l_name,
      message,
    } = this.state;
    alert(`Your name is ${f_name} ${l_name} \nYour email is ${email} \nYour address is ${address} 
    \nYou were born on ${dob} \n Your message is ${message} \nYour first choice is ${choice}
    \nYour second choice is ${choice1} \nYour third choice is ${choice2} \nYour fourth choice is ${choice3}`);
  };

  render() {
    return (
      <>
        <div className="container">
          {" "}
          <form action="" onSubmit={this.handleSubmit}>
            <Step1
              state={this.state}
              event={this.onChange}
              next={this._next}
              prev={this._prev}
              nextEvent={this.handleNext}
              backEvent={this.handleBack}
            />
            <Step2
              state={this.state}
              event={this.onChange}
              next={this._next}
              prev={this._prev}
              nextEvent={this.handleNext}
              backEvent={this.handleBack}
            />
            <Step3
              state={this.state}
              event={this.onChange}
              next={this._next}
              prev={this._prev}
              nextEvent={this.handleNext}
              backEvent={this.handleBack}
            />
          </form>
        </div>
      </>
    );
  }
}
