import "./styles.css";
import React, { Fragment } from "react";
import CommonComponent from "./CommonContainer";
import Table from "./table";
import Stats from "./Child2";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";

const statsData1 = [
  { title: "Android", number: "234.4" },
  { title: "IPhone", number: "134.4" },
  { title: "Window", number: "236.4" }
];

const statsData2 = [
  { title: "Temparature", number: "34.4 C" },
  { title: "Wind Speed", number: "14 Km/h" },
  { title: "Humidity", number: "236.4 unit" }
];

export default function App() {
  scaleMe = (e) => {
    e.target.style.transform = "scale(1.5)";
    e.target.style.transition = "transform 0.25s ease";
    setTimeout(() => {
      e.target.style.transform = "scale(1)";
      e.target.style.transition = "transform 0.25s ease";
    }, 1000);
  };
  return (
    <Fragment>
      <div className="App">
        <CommonComponent>
          <Table />
        </CommonComponent>
        <CommonComponent>
          <Stats TitleColor="red" SubColor="grey" stats={statsData1} />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Chart1 />
        </CommonComponent>
        <CommonComponent color="skyblue">
          <Chart2 />
        </CommonComponent>
        <CommonComponent>
          <Stats TitleColor="Green" SubColor="grey" stats={statsData2} />
        </CommonComponent>
        {Array(50)
          .fill()
          .map((a) => {
            return (
              <CommonComponent>
                <img
                  onClick={this.scaleMe}
                  src={`https://picsum.photos/300?cache=${Math.random()}`}
                />
              </CommonComponent>
            );
          })}
      </div>
    </Fragment>
  );
}
