import "./styles.css";
import React from "react";

export default class CommonComponent extends React.Component {
  render() {
    return <div className="widget-container">{this.props.children}</div>;
  }
}
