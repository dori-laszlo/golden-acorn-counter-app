import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";
import { Link } from 'react-router-dom';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { acorns: 0 };
  }

  increaseAmount() {
    this.setState(prevState => {
      return { acorn: prevState.acorns += 1 };
    });
  }

  decreaseAmount() {
    this.setState(prevState => {
      if (prevState.acorns !== 0) {
        return { acorn: prevState.acorns -= 1 };
      }
    });
  }

  render() {
    return (
      <div>
        <Link to="/states" className="nav">with states</Link>
        <Link to="/redux" className="nav">with Redux</Link>
        <Button do={this.increaseAmount.bind(this)} label="Buy one" />
        <Display amount={this.state.acorns} />
        <Button do={this.decreaseAmount.bind(this)} label="Eat one" />
      </div>
    );
  }
}