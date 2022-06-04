import React, { Component } from "react";

import API from "../utils/API";
import "./Calculator.css";

export default class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      results: "0",
      prevResults: "0",
      param1: "",
      param2: "",
      operator: "",
      APIFunction: null,
      onParam1: true
    };
    this.resetValues = this.resetValues.bind(this);
    this.getAPIFunc = this.getAPIFunc.bind(this);
    this.performCalculation = this.performCalculation.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  resetValues(result, error) {
    this.setState({
      input: "",
      prevResults: result !== 0 ? result : this.state.prevResults,
      results: error ? "Bad Expression!" : "0",
      param1: "",
      param2: "",
      operator: "",
      APIFunction: null,
      onParam1: true
    });
  }

  getAPIFunc(value) {
    let APIFunction = null;

    if (value === "+")
      APIFunction = API.add;
    else if (value === "-")
      APIFunction = API.subtract;
    else if (value === "*")
      APIFunction = API.multiply;
    else if (value === "/")
      APIFunction = API.divide;
    else if (value === "√")
      APIFunction = API.sqrt;
    else if (value === "^")
      APIFunction = API.power;
    // else already initialized to null

    return APIFunction;
  }

  performCalculation(usedEqualSign, value) {
    this.state.APIFunction(this.state.param1, this.state.param2)
      .then(response =>
        this.setState({
          input: usedEqualSign ? "" : this.state.input + " " + value + " ",
          prevResults: this.state.results !== 0 ? this.state.results : this.state.prevResults,
          results: response.data.result,
          param1: usedEqualSign ? "" : response.data.result,
          param2: "",
          operator: value,
          APIFunction: usedEqualSign ? null : this.getAPIFunc(value),
          onParam1: usedEqualSign ? true : false
        })
      )
      .catch(err => {
        console.log(err);
        this.resetValues(0, true);
      })
  }

  handleOnClick(event) {
    const value = event.target.value;

    switch (value) {
      case '=': {
        if (this.state.param1 === "" ||
          this.state.param2 === "" ||
          this.state.operator === "" ||
          this.state.APIFunction === null) {
          this.resetValues(this.state.results, true);
        }
        else {
          this.performCalculation(true, null);
        }
        break;
      }
      case "ac": {
        this.resetValues(this.state.results, false);
        break;
      }
      case "√": {
        if (!this.state.onParam1) {
          this.performCalculation(false, value);
        }
        else {
          this.setState({
            operator: value,
            input: this.state.input + " " + value + " ",
            APIFunction: this.getAPIFunc(value),
            param1: (this.state.param1 === "" ? "1" : this.state.param1),
            onParam1: false
          })
        }
        break;
      }
      case "pm": {
        if (this.state.input === "") return;
        if (!this.state.onParam1 && this.state.param2 === "") return;

        this.setState({
          param1:
            this.state.onParam1 ? this.state.param1 * -1 : this.state.param1,
          param2:
            this.state.onParam1 ? this.state.param2 : Number(this.state.param2) * -1,
          input:
            this.state.onParam1 ? this.state.param1 * -1 : (this.state.param1 + " " + this.state.operator + " " + (this.state.param2 * -1))
        })
        break;
      }
      case "^":
      case "+":
      case "-":
      case "*":
      case "/": {
        if (this.state.param1 === "") {
          this.resetValues(this.state.results, true);
        }
        else if (!this.state.onParam1) {
          this.performCalculation(false, value);
        }
        else {
          this.setState({
            operator: value,
            input: this.state.input + " " + value + " ",
            APIFunction: this.getAPIFunc(value),
            onParam1: false
          })
        }
        break;
      }
      default: {
        this.setState({
          input: this.state.input + value,
          param1:
            this.state.onParam1 ? this.state.param1 + value : this.state.param1,
          param2:
            this.state.onParam1 ? this.state.param2 : this.state.param2 + value
        })
      }
    }
  }

  render() {
    return (
      <div className='calculator'>
        <div className='c-wrapper'>

          <div className='ctc c-type'>
            <button className='active'>Math Calculator</button>
          </div>

          <div className='ctc c-screen'>
            <div className='c-history-answer'>
              <i className="fa-solid fa-clock"></i> <span>
                {/* 1,234 */}
                {this.state.prevResults}
              </span> </div>
            <div className='c-answer'>
              <span>
                {/* 0 */}
                {this.state.results}
              </span>
            </div>
          </div>

          <div className='ctc c-compute'>

            <div></div>
            <span>
              {/* 1234 + 5678 */}
              {this.state.input ? this.state.input : 0}
            </span>
          </div>

          <div className='c-grid'>
            <button type="button" className="top-btn" value="ac" onClick={this.handleOnClick}>ac</button>
            <button type="button" className="top-btn" value="√" onClick={this.handleOnClick}>√</button>
            <button type="button" className="top-btn" value="^" onClick={this.handleOnClick}>^</button>
            <button type="button" className="top-btn special" value="/" onClick={this.handleOnClick}>/</button>

            <button className="normal" value="7" onClick={this.handleOnClick}>7</button>
            <button className="normal" value="8" onClick={this.handleOnClick}>8</button>
            <button className="normal" value="9" onClick={this.handleOnClick}>9</button>


            <button className="special" value="*" onClick={this.handleOnClick}>x</button>
            <button className="normal" value="4" onClick={this.handleOnClick}>4</button>
            <button className="normal" value="5" onClick={this.handleOnClick}>5</button>
            <button className="normal" value="6" onClick={this.handleOnClick}>6</button>


            <button className="special" value="-" onClick={this.handleOnClick}>-</button>
            <button className="normal" value="1" onClick={this.handleOnClick}>1</button>
            <button className="normal" value="2" onClick={this.handleOnClick}>2</button>
            <button className="normal" value="3" onClick={this.handleOnClick}>3</button>
            <button className="special" value="+" onClick={this.handleOnClick}>+</button>

            <button type="button" className="top-btn" value="pm" onClick={this.handleOnClick}>&plusmn;</button>
            <button className="normal" value="0" onClick={this.handleOnClick}>0</button>
            <button className="normal" value="." onClick={this.handleOnClick}>.</button>
            <button className="special" value="=" onClick={this.handleOnClick}>=</button>
          </div>
        </div>
      </div >
    );
  }
}