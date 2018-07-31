import React, { Component } from 'react';
import Layout from '../../components/Layout';
class Login extends Component {
  updateVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitForm = (e) => {
    e.preventDefault();
  }
  render(){
    return (<Layout>
      <div className="row">
        <div className="col">
          <h1 className="heading">Please Login</h1>
        </div>
      </div>

      
      <form onSubmit={this.submitForm}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="email" type="email" onChange={this.updateVal} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input name="password" onChange={this.updateVal} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </Layout>)
  }
}
export default Login;