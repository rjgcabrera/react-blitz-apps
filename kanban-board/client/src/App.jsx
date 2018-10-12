import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Column from './components/Column';
// import

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "coworkers": ["Mary", "Jane", "Peter", "Parker"],
      "tasks": [["Task A1", "Task A2"],
                ["Task B1", "Task B2"],
                ["Task C1", "Task C2"],
                ["Task D1", "Task D2"]]
    }
  }

  componentDidMount() {
    let localTasks = localStorage.getItem("tasks");
    if (localTasks !== null) {
      this.setState({
        "tasks": JSON.parse(localTasks)
      });
    }
  }

  addTask(colIdx) {
    let prompt = new Promise((resolve, reject) => {
      let tasks = [...this.state.tasks];
      let newTask = _.escape(window.prompt("Enter a new task", "New Task"));
      tasks[colIdx].push(newTask);
      resolve(tasks)
    });
    prompt.then((tasks) => {
      this.setState({
        "tasks": tasks
      }, () => {
        localStorage.setItem("coworkers", JSON.stringify());
        localStorage.setItem("tasks", JSON.stringify(tasks));
      });
    });
  }

  moveTask(colIdx, taskIdx, direction) {
    let tasks = [...this.state.tasks];
    let task = tasks[colIdx].splice(taskIdx, 1)[0];
    if (direction === "L") {
      tasks[colIdx - 1].push(task);
    } else if (direction === "R") {
      tasks[colIdx + 1].push(task);
    }
    this.setState({
      "tasks": tasks
    }, () => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });
  }

  render() {
    let columns = _.map(this.state.coworkers, (elem, idx, arr) => {
      return <Column name={elem} tasks={this.state.tasks[idx]} colIdx={idx} colLen={this.state.coworkers.length} addTask={this.addTask.bind(this)} moveTask={this.moveTask.bind(this)} key={idx}/>
    });

    return (
      <div id="main-div">
        {columns}
      </div>
    )
  }
}

export default App;
