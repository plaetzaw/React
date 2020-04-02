import React from "react";
import PropTypes from "prop-types";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "this is a text value",
      num1: 4,
      num2: 11
    };
    //set state with function setSTate

    //USUALLY used with an event listener
    // setTimeout(params => {
    //   this.setState({ txt: "hello u stinky smelly world" });
    // }, 5000);
  }

  updateUp = () => {
    console.log("button be pushed yo");

    // this.setState({ txt: "O snap u smashed like" });
    this.setState({ num1: this.state.num1 + 3 });
    this.setState({ num2: this.state.num2 + 3 });
  };

  updateDown = () => {
    console.log("button be pushed yo");

    // this.setState({ txt: "O snap u smashed like" });
    this.setState({ num1: this.state.num1 - 3 });
    this.setState({ num2: this.state.num2 - 3 });
  };

  render() {
    //DONT TRY TO HARDCODE A STATE
    return (
      <>
        {this.state.txt}
        <br />
        {this.state.num1} + {this.state.num2} =
        {this.state.num1 + this.state.num2}
        <br />
        <button onClick={this.updateUp}>Numbs going up</button>
        <button onClick={this.updateDown}>Numbs going down</button>
      </>
    );
  }
}

// Child.propTypes = {
//   txt: PropTypes.string,
//   integer: PropTypes.number,
//   integer: PropTypes.number.isRequired
// };

export default Child;
