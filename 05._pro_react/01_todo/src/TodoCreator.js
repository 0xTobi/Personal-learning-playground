import react from "react";
import { Component } from "react/cjs/react.production.min";

export class TodoCreator extends Component {

    constructor(props) {
        super(props); 
        this.state = { newItemText: "" }                        // Responsible for resetting the value of the form input field.
    }

    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value});      // When the value of the form input changes, this function updates the value of (this.state) with the value in the form input field.
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);            // Performs an acion on the value stored in the newItemText
        this.setState({ newItemText: ""});                      // This resets the value of newItemText 
    }

    render = () => 
        <div className="my-1">
            <input className="form-control" value={ this.state.newItemText }
                onChange={this.updateNewTextValue} />
            <button className="btn btn-primary mt-1"
                onClick={this.createNewTodo }>Add</button>
        </div>
}


// - This component is responsible for accepting new todo data from the user.
// - Child components can also have their own state data. 
//   In this case "newItemText".