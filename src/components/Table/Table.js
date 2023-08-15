
import React, { useEffect, useState } from "react";
import UseSortableData from "./UseSortableData";
  

const Table = (props) => {
    const [ dataRows, requestSort, sortConfig ] = UseSortableData(props.data.rows);


const handlefun =(column)=>{
    requestSort(column)
}
  const TableHeaders = () => {
    return (
      <thead>
        <tr>
          <th>
            <input type="checkbox" name="group" />
          </th>
          {props.data.columns.map((column) => (
            <th
              key={column}
              onClick={() => {
                handlefun(column)
              }}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const Tbody = () => {
    return (
      <tbody>
        {dataRows.map((row) => (
          <tr key={row.Name}>
            <td>
              <input type="checkbox" name="group" />
            </td>
            {props.data.columns.map((column) => {
              if (column === "Name") {
                return (
                  <td key={column} id="img-td">
                    <a href="#" target="_blank">
                      {row[column]}
                    </a>
                    <div className="action-container">
                      <div className="action-btn">
                        <img src="./ico-elips.svg" alt="menu icon" />
                      </div>
                    </div>
                  </td>
                );
              } else if (column === "Type") {
                return (
                  <td key={column}>
                    <b>{row[column]}</b>
                  </td>
                );
              }
              return <td key={column}>{row[column]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table className="" width="100%">
      <TableHeaders />
      <Tbody />
    </table>
  );
};

export default Table;
