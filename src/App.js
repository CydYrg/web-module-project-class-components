import React from 'react';

class Todo extends React.Component {
  render() {
    return (<div>
      <h1>Lets do {this.props.name}</h1>
      <h2>Lets do {this.props.id}</h2>
    </div>)
  }
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    }
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      task: 'Do laundry',
      id: 1528817084358,
      completed: false
    });
  }
  render() {
    return (
      <div>
        <Todo task={this.state.task} id={this.state.id}/>
        <button onClick={this.handleClick}>Add Todo</button>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
