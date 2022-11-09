import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./index.css";

const mapStateToProps = (state) => {
  return {
    isLightOn: state.isLightOn
  };
};

const mapDispatchToProps = {
  flipLight() {
    console.log("1");
    return {
      type: "FLIP"
    };
  }
};

class Room extends React.Component {
  render() {
    const lightedness = this.props.isLightOn ? "lit" : "dark";
    return (
      <div className={`room ${lightedness}`}>
        the room is {lightedness}
        <br />
        <button onClick={this.props.flipLight}>flip</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
