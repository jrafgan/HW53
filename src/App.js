import React, {Component} from 'react';
import NewTask from "./components/NewTask.js";

class App extends Component {
  state = {
    toDoList: [
      { text: 'Buy milk'},
      { text: 'Do homework'}
      ],
    showToDoList: true
  };

  addTask = (event, index) => {
    const toDoListCopy = this.state.ToDoList;

    toDoListCopy.text = event.target.value;
    toDoListCopy.id = event.target.id;
    toDoListCopy.push(NewTask);

    this.setState({toDoList: toDoListCopy});
  };

  increaseAge = id => {
    const index = this.state.toDoList.findIndex(task => task.id === id);

    const toDoList = [...this.state.toDoList];
    const task = {...this.state.toDoList[index]};


    toDoList[index] = task;

    this.setState({toDoList});
  };

  removeTask = index => {
    const toDoListCopy = this.state.toDoList;
    toDoListCopy.splice(index, 1);

    this.setState({toDoList: toDoListCopy});
  };

  toggleTask = () => {
    this.setState({
      showToDoList: !this.state.showToDoList
    });
  };

  render() {
    let toDoList = null;

    if (this.state.showToDoList) {
      toDoList = this.state.toDoList.map((task, index) => (
        <NewTask
          text={task}
          id={index}
          onClick={() => this.increaseAge(task.index)}
          onChange={event => this.addTask(event, index)}
          remove={() => this.removeTask(index)}>
        </NewTask>
      ));
    }

    return (
      <div className="App">
        <div>
          <button onClick={this.toggleTask}>Toggle toDoList</button>
        </div>
        {toDoList}
      </div>
    );
  }
}

export default App;
