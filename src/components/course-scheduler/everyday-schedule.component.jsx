import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import $ from "jquery";

export default function EverydaySchedule(props) {
  const [state, setState] = useState(props);

  useEffect(() => {
    setState(props);
  }, [props]);
  console.log(props)
  const setEverydaySch = (data) => {
    props.setEverydaySchedule(data);
  }

  return (
    <MaterialTable
      title="Everyday Schedule"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  setEverydaySch(data);
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                setEverydaySch(data)
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
