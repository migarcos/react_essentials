 import React, {Component} from "react";

 export default class ClassCounter extends Component {

    constructor(props) {
      super(props)
      this.state = {
        count : 0,
      };
    }

    increase = () => {
      this.setState( (prevState) => ({ count: prevState.count + 1 }));
    };

    decrease = () => {
      this.setState( (prevState) => ({ count: prevState.count - 1 }));
    };

    render() {

      const { count } = this.state;

      return (
        <>
          <h1>Click Counter</h1>
          <p>Count: {count} </p>
          <button onClick={this.increase}>  ADD </button>
          <button onClick={this.decrease}>  SUBSTRACT </button>
        </>
      );
    }
 }