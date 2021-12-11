import "./styles.css";
import React from "react";
import DataTable from "react-data-table-component";

const customStyles = {
  rows: {
    style: {
      minHeight: "30px" // override the row height
    }
  },
  header: {
    style: {
      fontSize: "22px",
      color: "pink",
      backgroundColor: "blue",
      minHeight: "56px",
      paddingLeft: "16px",
      paddingRight: "8px"
    }
  },
  headCells: {
    style: {
      paddingLeft: "3px", // override the cell padding for head cells
      paddingRight: "3px"
    }
  },
  cells: {
    style: {
      paddingLeft: "3px", // override the cell padding for data cells
      paddingRight: "3px"
    }
  }
};
const teams = [
  {
    name: "jitendra",
    channels: []
  },
  {
    name: "rahul",
    channels: []
  },
  {
    name: "abhishek",
    channels: []
  },
  {
    name: "seema",
    channels: []
  },
  {
    name: "ankush",
    channels: []
  },
  {
    name: "jitendra",
    channels: []
  },
  {
    name: "Priya",
    channels: []
  },
  {
    name: "jitendra",
    channels: []
  },
  {
    name: "Pratiksha",
    channels: []
  },
  {
    name: "jitendra",
    channels: []
  },
  {
    name: "jitu",
    channels: []
  },
  {
    name: "jitendra",
    channels: []
  },
  {
    name: "hey",
    channels: []
  }
];

export default (props) => {
  const columns = [
    { name: "Team Name", selector: (row) => row.name },
    { name: "number of channels", selector: (row) => row.totalChannels },
    { name: "number of channels", selector: (row) => row.totalChannels }
  ];
  const conditionalRowStyles = [
    {
      when: (row) => row.name === "jitendra",
      style: {
        backgroundColor: "lightBlue",
        color: "white"
      }
    }
  ];
  const data = teams.map((a, index) => ({
    id: index,
    name: a.name,
    totalChannels: a.channels.length
  }));
  return (
    <div className="widget-internal">
      <DataTable
        columns={columns}
        data={data}
        paginationPerPage={5}
        persistTableHead={true}
        selectableRows
        highlightOnHover
        pointerOnHover
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
};
