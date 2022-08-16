import React, { Component } from 'react';
import {TodoBanner} from './TodoBanner';
import {TodoCreator} from './TodoCreator';
import {TodoRow} from './TodoRow';
import { VisibilityControl } from './VisibilityControl';

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App; 





// ------------------------------------------------------------------------------------------

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <h4 className='' = "bg-primary text-white text-center p-2">
//           To Do List
//         </h4>
//       </div>
//     )
//   };
// } 


// ----------------------------------------------------------------------------------------------


// import React, { Component } from 'react'; 
// export default class App extends Component {
  
//   constructor(props) { 
//     super(props); 
//     this.state = {
//     userName: "Adam" }
//   }

//   changeStateData = ()  => {
//     this.setState({                                                    setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.                                            
//       userName: this.state.userName === "Tobi" ? "Marvy" : "Tobi"        
//     })
//   }

//   renderer = () => 
//     <div>
//       <h4 className="bg-primary text-white text-center p-2">
//         { this.state.userName }'s To Do List                      {/*Expressions are denoted with curly braces "{}". When the render method is invoked, the expression between the curly bracket is evaluated*/}
//       </h4>
//       <button className="btn btn-primary m-2"
//           onClick={ this.changeStateData }>                       {/*Clicking this button triggers the event within the curly braces. onClick is an example of an event-handler prop*/}
//             Change
//       </button>
//     </div>
// }

// Everytime you click the button the value of the userName property in this.state is changed. 
// setState takes note of the Change and automatically re-renders the page. Updating the UI. 



// -------------------------------------------------------------------------------------------------------------

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userName: "Tobi",                                           
//       todoItems: [{ action: "Buy Flowers", done: false }, 
//                   { action: "Get Shoes", done: false }, 
//                   { action: "Collect Tickets", done: true }, 
//                   { action: "Call Joe", done: false }], 
//       newItemText: ""                                               // This property clears the input elment.
//     }
//   }

//   updateNewTextValue = (event) => {
//     this.setState({ newItemText: event.target.value });             // event.target gives you the element that triggered the event. So, event.target.value retrieves the value of that element (an input field, in your example).
//   }

//   createNewTodo = () => {
//     if (!this.state.todoItems                                       
//       .find(item => item.action === this.state.newItemText)) {      // If the new action is not found in the list of todoItems actions, then add the item to the todoItems 
//         this.setState({
//           todoItems: [...this.state.todoItems,
//             { action: this.state.newItemText, done: false}],
//           newItemText: ""
//         });
//       }       
//   }


// toggleTodo = (todo) => this.setState({ todoItems:
//   this.state.todoItems.map(item => item.action === todo.action 
//     ? { ...item, done: !item.done} : item) });

// todoTableRows = () => this.state.todoItems.map(item =>
//   <tr key={ item.action }>
//     <td>{ item.action }</td>
//     <td>
//       <input type="checkbox" checked={ item.done }
//         onChange={ () => this.toggleTodo(item)} />
//     </td>
//   </tr>
//   );

//   render = () => 
//       <div>
//         <h4 className="bg-primary text-white text-center p-2">
//           { this.state.userName }'s To Do List                                  {/* Expressions are denoted with curly braces "{}". When the render method is invoked, the expression between the curly bracket is evaluated  */}
//           ({ this.state.todoItems.filter(t => !t.done).length} items to do)     {/* Filter the list of todoItems to get the number of actions that have not been done */}
//         </h4>
// we 
//         <div className="container-fluid">
//           <div className="my-1">
//             <input className="form-control" 
//               value={ this.state.newItemText }
//               onChange={ this.updateNewTextValue } />
//             <button className="btn btn-primary mt-1"
//               onClick={ this.createNewTodo }>Add</button>
//           </div>
//         </div>
        
//         <table className="table table-striped table-bordered">
//           <thead>
//             <tr><th>Description</th><th>Done</th></tr>
//           </thead>
//           <tbody>{ this.todoTableRows() }</tbody>
//         </table>
//       </div>
// }



// Using Child Components ---------------------------------------------------------------------------

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Tobi",                                           
      todoItems: [{ action: "Buy Flowers", done: false }, 
                  { action: "Get Shoes", done: false }, 
                  { action: "Collect Tickets", done: true }, 
                  { action: "Call Joe", done: false }], 
      showCompleted: true                                               
    }
  }


  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value });            
  }


  createNewTodo = (task) => {
    if (!this.state.todoItems                                       
      .find(item => item.action === task)) {
        this.setState({
          todoItems: [...this.state.todoItems, {action: task, done: false}]
        }, () => localStorage.setItem("todos", JSON.stringify(this.state)));
      }       
  }


  toggleTodo = (todo) => this.setState({ todoItems:
    this.state.todoItems.map(item => item.action === todo.action 
      ? { ...item, done: !item.done} : item) });


  // todoTableRows = () => this.state.todoItems.map(item =>
  //   <TodoRow key={ item.action } item={item} callback={this.toggleTodo} />
  // );  

  todoTableRows = (doneValue) => this.state.todoItems
    .filter(item => item.done == doneValue).map(item => 
      <TodoRow key={ item.action } item={item} callback={this.toggleTodo} />
  );


  // render = () => 
  //   <div>
  //     <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
  //     <div className="container-fluid">
  //       <TodoCreator callback={this.createNewTodo} />
  //       <table className="table table-striped table-bordered">
  //         <thead> 
  //           <tr><th>Description</th><th>Done</th></tr> 
  //         </thead>
  //         <tbody>{ this.todoTableRows() }</tbody>
  //       </table>
  //     </div>
  //   </div>

  render = () => 
    <div>
      <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
      <div className="container-fluid">
        <TodoCreator callback={this.createNewTodo} />
        <table className="table table-striped table-bordered">
          <thead> 
            <tr><th>Description</th><th>Done</th></tr> 
          </thead>
          <tbody>{this.todoTableRows(false)}</tbody>
        </table>
        <div className="bg-secondary text-white text=center p-2">
          <VisibilityControl description="Completed Tasks"
            isChecked={this.state.showCompleted}
            callback={ (checked) => 
              this.setState({ showCompleted: checked})} />
        </div>

        { this.state.showCompleted && 
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{ this.todoTableRows(true) }</tbody>
          </table>
        }
      </div>
    </div>
}



