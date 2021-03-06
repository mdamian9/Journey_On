import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../Auth/AuthService';
import API from '../../utils/API';
// import Footer from '../Footer/Footer';
import "./Signup.css";

class Signup extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/');
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.username, this.state.email, this.state.password)
      .then(res => {
        console.log(res.data);
        // once the user has signed up
        // send them to the login page

        this.Auth.login(this.state.email, this.state.password).then(res => {
          console.log("New user logged in! ", res.data);
          this.props.history.replace('/buildjourney');
        }).catch(err => {
          console.log(err.response);
          alert(err.response.data.message)
        });
        this.props.history.replace('/buildjourney');
      })
      .catch(err => {
        console.log(err.response);
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="signupContainer">
      <div className="form-group row justify-content-center">
        <div className="col-md-6">

        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className="form-control"
              placeholder="Username goes here..."
              name="username"
              type="text"
              id="username"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className="form-control"
              placeholder="Email goes here..."
              name="email"
              type="email"
              id="email"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className="form-control"
              placeholder="Password goes here..."
              name="password"
              type="password"
              id="pwd"
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p className="link"><Link to="/login">Go to Login</Link></p>
        {/* <Footer /> */}
      </div>
      </div>
      </div>
    );
  }
}

export default Signup;