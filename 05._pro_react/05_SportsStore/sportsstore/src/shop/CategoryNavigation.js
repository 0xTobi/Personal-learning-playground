/** @format */

import React, {Component} from "react";
// import {Link} from "react-router-dom";
import {ToggleLink} from "../ToggleLink";

export class CategoryNavigation extends Component {
  render() {
    return <React.Fragment>
        {/* <Link className='btn btn-secondary btn-block' to={this.props.baseUrl}>
          All
        </Link> */}

        {/* Using "ToggleLink" instead of "Link" */}
        <ToggleLink to= {this.props.baseUrl} exact= {true}>All</ToggleLink>
                    
        {this.props.categories && // Check if there is a category array.
          this.props.categories.map((cat) => (
            // <Link
            //   className='btn btn-secondary btn-block'
            //   key={cat}                // As seen in previous excercises, REACT requires a key prop to be applied to elements generated using the map or any iterative method.
            //   to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
            //      {cat}          
            // </Link>

            <ToggleLink key= {cat} to= {`${this.props.baseUrl}/${cat.toLowerCase()}`}>
              {cat}
            </ToggleLink>
          ))}
                
      </React.Fragment>
  }
}

// The "Link" component is provided by the react router package. The selection of a category will be handled by navigating to a new URL without sending any HTTP request.
