import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Task from './Task';

const Column = (props) => {
  let tasks = _.map(props.tasks, (task, idx, arr) => {
    return <Task task={task} moveTask={props.moveTask} colIdx={props.colIdx} colLen={props.colLen} taskIdx={idx} key={idx} />;
  });
  let spacing = "0";
  if (props.colIdx === props.colLen - 1) {
    spacing = "25";
  }
  return (
    <div className="col" style={{"marginRight": spacing + "px"}}>
      <div id={props.name}>
        {props.name}
      </div>
      <div className="tasks">
        {tasks}
        <button className="btn btn-primary" onClick={(event) => {props.addTask(props.colIdx)}}>Add Task</button>
      </div>
    </div>
  );
};

export default Column;
