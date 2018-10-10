import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

const Task = (props) => {
  let lButton = <button className="btn btn-warning btn-sm" onClick={(event) => {
      props.moveTask(props.colIdx, props.taskIdx, "L");
    }}>&lt;</button>;

  let rButton = <button className="btn btn-warning btn-sm" onClick={(event) => {
      props.moveTask(props.colIdx, props.taskIdx, "R");
    }}>&gt;</button>;

  if (props.colIdx === props.colLen - 1) {
    rButton = '';
  }
  if (props.colIdx === 0) {
    lButton = '';
  }

  return (
    <div className="task">
      {lButton}
      {props.task}
      {rButton}
    </div>
  );
};

export default Task;
