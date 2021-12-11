import "./styles.css";
import React, { Fragment } from "react";
import CommonComponent from "./CommonContainer";
import Table from "./table";
import Chart from "./Child2";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";

export default function App() {
  return (
    <Fragment>
      <div className="App">
        {[Table, Chart1].map((a) => (
          <CommonComponent>{a}</CommonComponent>
        ))}
        <CommonComponent>
          <Table />
        </CommonComponent>
        <CommonComponent>
          <Chart />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Chart1 />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Chart2 />
        </CommonComponent>
        {/*  <CommonComponent color="skyblue">
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
