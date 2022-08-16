import react, { Component } from "react";

export class VisibilityControl extends Component {
 
    render = () => 
        <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                checked={this.props.isChecked} 
                onChange={ (e) => this.props.callback(e.target.checked)} />
            <label className="form-check-label">
                Show { this.props.description }
            </label>
        </div>
}


// - This component is responsible for toggling on and off the completed tasks.
// - It uses the isChecked data prop to get the initial checkbox value from the parent component
// - It also uses a callback function that is invoked when the user toggles the checkbox
//   and triggers the change event.
// - Lastly, it uses the description data prop to get the name of the description.


// - THIS IS A GENERAL PURPOSE FUNCTION THAT CAN BE USED IN ANY APPLICATIOM
//   IT WORKS ENTIRELY THROUGH ITS PROPS.
