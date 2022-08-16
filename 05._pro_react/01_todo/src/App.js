import React, { Component } from 'react';
import {TodoBanner} from './TodoBanner';
import {TodoCreator} from './TodoCreator';
import {TodoRow} from './TodoRow';
import { VisibilityControl } from './VisibilityControl';


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


  // updateNewTextValue = (event) => {
  //   this.setState({ newItemText: event.target.value });            
  // }


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


  todoTableRows = (doneValue) => this.state.todoItems
    .filter(item => item.done == doneValue).map(item => 
      <TodoRow key={ item.action } item={item} callback={this.toggleTodo} />
  );
  // - This function does two things:
  // - First, it filters the todoItems array by comparing the done property with the arguement.
  // - Secondly, it maps the array and invokes the TodoRow component for every iteration.

  // - The "key" attribute is used as a result of an inefficiency when dealing with iterations in list in  React
  // - The key requires a unique value
  // - The item.action in this instance holds a unique value in every iteration, 
  //   that's why we used it as our key.
  // - COnsider it as a sort of ID for each iteration.


  componentDidMount = () => { 
    let data = localStorage.getItem("todos"); 
    this.setState(data != null ?  // If there's a new data
      JSON.parse(data)            // Parse the data
      : {                         // else, save this object.
          userName: "Adam",      
          todoItems: [{ action: "Buy Flowers", done: false }, 
                      { action: "Get Shoes", done: false }, 
                      { action: "Collect Tickets", done: true }, 
                      { action: "Call Joe", done: false }],
          showCompleted: true 
        });
  }

  //  The local storage API is accessed through the localStorage object
  //  The component uses the setItem method to store the to-do items when a new to-do item is created.
  //  The local storage value is only able to store strings, hence the JSON conversion.
  
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
            callback={ (checked) => this.setState({ showCompleted: checked})} />
        </div>

        { this.state.showCompleted && 
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{ this.todoTableRows(true) }</tbody>
          </table>
        }
        {/* This is a data binding expression. 
            The data will only be displayed when the showCompleted property is true */}
      </div>
    </div>
}



