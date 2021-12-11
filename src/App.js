import "./styles.css";
import React, { Fragment } from "react";
import CommonComponent from "./CommonContainer";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function App() {
  const [abc, setAbc] = React.useState("jks");
  return (
    <Fragment>
      <div className="App">
        <CommonComponent color="skyblue">
          <Child1 />
        </CommonComponent>
        <CommonComponent color="lightyellow">
          <Child2 />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Child2 />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Child2 />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Child2 />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Child2 />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Child2 />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Child2 />
        </CommonComponent>
      </div>
    </Fragment>
  );
}
