import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./Home";
import AuthForm from "./AuthForm";

class Root extends Component {
  render() { 
    return this.props.account.loggedIn ? <Home /> : <AuthForm />; //if條件句用法
  }
}

export default connect(({account})=>({account}),null)(Root); 