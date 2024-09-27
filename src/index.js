import React from 'react';
import ReactDOM from 'react-dom';


import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const tasks = [
  {
    task:'Laundry',
    id: 123,
    completed:false
},
{
    task: 'Dishes',
    id: 124,
    completed:false
},
{
    task: 'Ironing',
    id: 125,
    completed:false

},
];
  
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: tasks
        }
    }

    // toggleTodo = id => {
    //      this.setState({
    //          ...this.state.tasks,
    //          tasks: this.state.tasks.map(task => {
    //              if (task.id === id) {
    //                  return ({
    //                      ...task,
    //                      completed: !task.purchased
    //                  })
    //              } else {
    //                  return task
    //              }
    //          })

    //      });
    // }

    // addTask = id => {
    //     const newTask = {
    //         task: task,
    //         id: Date.now(),
    //         completed: false
    //     };

    //     this.setState({
    //         ...this.state,
    //         tasks: [...this.state.tasks, newTask]
    //     });
    // }

    // clearCompleted = () => {
    //     this.setState({
    //         ...this.state,
    //         groceries: this.state.groceries.filter(task => {
    //             return task.completed === false
    //         })
    //     });

        render() {
            return (
                <div className="App">
                    <div className="header">
                        <h1>Todo List</h1>
                        <TodoForm />
                    </div>
                    <TodoList  tasks={this.state.tasks} />
                </div>
            );
        }
    }

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, document.getElementById('root'));
