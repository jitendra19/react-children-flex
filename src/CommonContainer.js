import "./styles.css";
import React from "react";

export default class CommonComponent extends React.Component {
  scaleMe = (e) => {
    e.target.style.transform = "scale(1.5)";
    e.target.style.transition = "transform 0.25s ease";
    setTimeout(() => {
      e.target.style.transform = "scale(1)";
      e.target.style.transition = "transform 0.25s ease";
    }, 1000);
  };
  render() {
    return (
      <div className="widget-container" onClick={this.scaleMe}>
        {this.props.children}
      </div>
    );
  }
}
