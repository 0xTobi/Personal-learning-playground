// /** @format */

// The shop component and its CategoryNavigation and ProductList chioldren needs access to the data store.
// This component connects the components with the feature they require.

import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from "../data/CartActionCreators";
import { CartDetails } from "./CartDetails";

const mapStateToProps = (dataStore) => ({ ...dataStore });
const mapDispatchToProps = { loadData, addToCart, updateCartQuantity, removeFromCart, clearCart };
const filterProducts = (products = [], category) =>
  (!category || category === "All")
    ? products
    : products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );

export const ShopConnector = connect(mapStateToProps,mapDispatchToProps)(
    // The connect function is provided by the Redux packag. It links a component to a data store.
  class extends Component {
    render() {
      return (
        <Switch>         
          <Route path='/shop/products/:category?'
            render={(routeProps) => (
                // routrProps is how the shop Component knows which category the user has selected.
              <Shop {...this.props} {...routeProps}
                products={filterProducts(
                  this.props.products,
                  routeProps.match.params.category
                )}
                // Select only products in the category chosen by the user.
              />
            )}
          />
          
          <Route path="/shop/cart" render={ (routeProps) => 
              <CartDetails {...this.props} {...routeProps } />} 
          />

          <Redirect to='/shop/products' />             
          {/* Redirect to /shop/products if the browser's current URL isn't matched by the route. */}
        </Switch>
      );
    }

    componentDidMount() {
      this.props.loadData(DataTypes.CATEGORIES);
      this.props.loadData(DataTypes.PRODUCTS);
    }
  }
);


// The component that presents data to the user receives their data via props without the need to obtain it directly from the data store or the URL routing system. 
// This component connects the Redux data store and the URL router to the Shop component

