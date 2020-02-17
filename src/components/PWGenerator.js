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

    this.setState({
      passwordLength: targetValue.length > 7 ? true : false
    });
  };

  render() {
    let { passwordLength } = this.state;

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
              <div>Containes numbers</div>
              <div>Containes UpperCase</div>
              <div>Containes Symbols</div>
            </div>
            <button className="Submit" disabled={true}>
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default PWGenerator;
