import React, { Component } from 'react';
import Layout from '../../components/Layout';
const AboutContent = (props) => {
  return <div className="row">
      <div className="col">
        <h1>About Thanos Cheese</h1>
        <p>Company was founded in 2005 Company was founded in 2005 A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.</p>
        <p>
          A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.
        </p>
      </div>
    </div>
}
class About extends Component {
  render(){
    return <Layout>
        <AboutContent />
      </Layout>
  }
}
export default About;