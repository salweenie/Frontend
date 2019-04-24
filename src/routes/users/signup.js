import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Redirect } from 'react-router-dom';
import { signupRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';
class Signup extends Component {
  state = {
    error: null,
    signedup: null,
    aresignedin: null
  }
  updateVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitForm = async(e) => {
    e.preventDefault();
    this.setState({
      error: null
    })
    try {
      let response = await signupRequest({name: this.state.name, email: this.state.email, password: this.state.password});
      saveUser(response);
      this.setState({
        loggedin: false,
        aresignedin: true
      })
    }catch (e){
      this.setState({
        error: e.email
      })
    }
  }
  render(){
    return (
    <Layout>
        {this.state.aresignedin ? <Redirect to="/success/"/> : null}
      <div className="row">
        <div className="col">
          <h1 className="heading">Please Sign In</h1>
        </div>
      </div>

      {this.state.error ?
        <div className="alert alert-danger" role="alert">
          {this.state.error}
        </div>
      : null }
      <form onSubmit={this.submitForm}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input name="name" type="name" onChange={this.updateVal} className="form-control" id="exampleInputname1" aria-describedby="nameHelp" placeholder="Enter name" />
        <small id="nameHelp" className="form-text text-muted">What's your name.</small>
      </div>
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
export default Signup;