import "./styles.css";
import React from "react";

export default (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexWrap: "wrap"
      }}
    >
      <div>
        {props.stats.map((a) => {
          return (
            <div className="stats">
              <h2 style={{ color: props.TitleColor }}>
                {a.title}{" "}
                <span style={{ color: props.SubColor }}>{a.number}</span>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
