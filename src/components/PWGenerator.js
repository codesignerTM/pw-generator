import React, { Component } from "react";

class PWGenerator extends Component {
  state = {
    password: "",
    passwordLength: false,
    containsNumber: false,
    isUpperCase: false,
    containsSymbols: false
  };

  handleChange = input => e => {
    let targetValue = e.target.value;
    this.checkForNumbers(targetValue);
    this.checkforUpperCase(targetValue);
    this.checkForSymbols(targetValue);
    this.setState({
      passwordLength: targetValue.length > 7 ? true : false
    });
  };

  checkForNumbers = string => {
    let matches = string.match(/\d+/g);
    this.setState({
      containsNumber: matches != null ? true : false
    });
  };

  checkforUpperCase = string => {
    let matches = string.match(/[A-Z]/);
    this.setState({
      isUpperCase: matches != null ? true : false
    });
  };

  checkForSymbols = string => {
    let symbols = new RegExp(/[^A-Z a-z0-9]/);
    this.setState({
      containsSymbols: symbols != null ? true : false
    });
  };

  submitForm = e => {
    e.preventDefault();
    alert("Form submitted");
  };

  render() {
    let {
      passwordLength,
      containsNumber,
      isUpperCase,
      containsSymbols
    } = this.state;

    let btnStatus =
      passwordLength && containsNumber && isUpperCase && containsSymbols
        ? false
        : true;

    return (
      <>
        <div className="title">Password Checker</div>
        <div className="content">
          <form action="">
            <input
              type="text"
              placeholder="Please "
              onChange={this.handleChange("password")}
            />
            <div>
              <div className={passwordLength ? "green" : null}>
                Containes more than 8 character
              </div>
              <div className={containsNumber ? "green" : null}>
                Containes numbers
              </div>
              <div className={isUpperCase ? "green" : null}>
                Containes UpperCase
              </div>
              <div className={containsSymbols ? "green" : null}>
                Containes Symbols
              </div>
            </div>
            <button
              className="Submit"
              disabled={btnStatus}
              onClick={this.submitForm}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default PWGenerator;
