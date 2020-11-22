import React, { Component } from 'react';
import './App.css'
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons'

class App extends Component{
  render(){
    return(
      <form className="login-form text-center">
        <h1><span>mynewwe</span>bsite.com</h1>
        <h3 className="text-muted">Register with your email </h3>
      <FormGroup>
        <label>Email </label> <br></br>
        <input 
       className="form-control form-control-sm login-form" type="email" placeholder="Email" required></input>
      </FormGroup>
      <FormGroup>
        <label>Password  </label> <br></br>
        <input className="form-control form-control-sm" type="password" placeholder="Password" required></input>
      
      </FormGroup>
        <button className="btn  btn-lg btn-dark btn-block ">Log IN</button>
        <div className="text-center pt-3">
          Or continue with your facebook account
          <FacebookLoginButton />
        </div> 
      
    </form>
    

    
          

    );
  }
}
export default App;