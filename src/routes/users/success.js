import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout';
const Success = (props) => {
  return <div className="row">
      <div className="col">
        <h1>Thank You for Signing Up</h1>
        <p>You were registered successfully! You are now logged in <Link to = "./login"> Login!</Link></p>
      </div>
    </div>
}

export default Success;