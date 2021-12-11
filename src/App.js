import "./styles.css";
import React, { Fragment } from "react";
import CommonComponent from "./CommonContainer";
import Table from "./table";
import Chart from "./Child2";

export default function App() {
  return (
    <Fragment>
      <div className="App">
        <CommonComponent>
          <Table />
        </CommonComponent>
        <CommonComponent>
          <Chart />
        </CommonComponent>
        {/* <CommonComponent color="skyblue">
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
        </CommonComponent> */}
      </div>
    </Fragment>
  );
}
