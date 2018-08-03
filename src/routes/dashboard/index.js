import React, { Component } from 'react';
import './dashboard.css';
import Layout from '../../components/Layout';
import { Redirect } from 'react-router-dom';
import { getDashboard } from '../../helpers/network';
import { userLogout } from '../../helpers/authentication';

const Row = (props) => {
  return <tr>
    <th scope="row">{props.row.name}</th>
    <td>{props.row.profession}</td>
    <td>{props.row.location}</td>
  </tr>
}
const Loading = (props) => {
  return <div className="alert alert-info" role="alert">
    Logging In Please Wait
  </div>
}
const Table = (props) => {
  return <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Profession</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {props.data ? props.data.map(row => <Row key={row.name} row={row} />) : null}
      </tbody>
    </table>
  </div>
}
class Dashboard extends Component {
  state = {
    authenticated: false,
    data: null,
    error: false
  }
  async componentDidMount(){
    try {
      const response = await getDashboard();
      this.setState({
        data: response,
        authenticated: true
      });
    }catch(e){
      userLogout();
      this.setState({
        error: true,
        authenticated: false
      })
    }
  }
  render() {
    return (
      <Layout>
        {this.state.authenticated === false && this.state.error === true ? <Redirect to="/users/login" /> : null}
        {this.state.authenticated === false && this.state.error === false ? <Loading /> : <Table data={this.state.data}/>}
      </Layout>
    );
  }
}

export default Dashboard;
