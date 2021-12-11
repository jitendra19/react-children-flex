import "./styles.css";
import React from "react";

export default (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <div>
        <div className="stats">
          <h2>
            Android <span style={{ color: "Grey" }}>453.67</span>
          </h2>
        </div>
        <div className="stats">
          <h2>
            iPhone <span style={{ color: "Grey" }}>453.67</span>
          </h2>
        </div>
        <div className="stats">
          <h2>
            windows <span style={{ color: "Grey" }}>453.67</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
