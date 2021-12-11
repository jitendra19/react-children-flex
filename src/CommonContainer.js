import "./styles.css";
import React from "react";

export default class CommonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="widget-container">
        {/* <div>parent</div> */}
        {/* {this.props.color} */}
        {this.props.children}
      </div>
    );
  }
}
