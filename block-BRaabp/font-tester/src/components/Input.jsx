import React from "react";
import Fonts from "./Fonts";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "16",
      input: "",
    };
  }
  handleFontSize = (event) => {
    this.setState({
      size: event.target.value,
    });
  };
  handleReset = () => {
    this.setState({
      size: "16",
    });
  };
  handleInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  render() {
    return (
      <div className="container ">
        <div className="input flex">
          <input
            type="text"
            placeholder="Type your input"
            onChange={this.handleInput}
            value={this.state.input}
          />
          <div className="flex">
            <p>{this.state.size} px</p>
            <input
              value={this.state.size}
              type="range"
              min="1"
              max="100"
              onChange={this.handleFontSize}
            />
            <i className="fas fa-rotate-right" onClick={this.handleReset}></i>
          </div>
        </div>
        <Fonts state={this.state} />
      </div>
    );
  }
}
export default Input;
