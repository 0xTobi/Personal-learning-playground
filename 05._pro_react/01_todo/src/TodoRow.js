import react from "react";
import { Component } from "react/cjs/react.production.min";

export class TodoRow extends Component {
    
    render = () => 
    <tr>
        <td>{ this.props.item.action}</td>
        <td>
            <input type="checkbox" checked={ this.props.item.done }
            onChange={ () => this.props.callback(this.props.item)}
            />
        </td>
    </tr>
}