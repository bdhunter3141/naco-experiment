import React, { Component } from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components'



export default class PersonalDashboard extends Component {
  render() {
    return (
      <div className="dashboard-wrapper">
        <h1>Personal Dashboard</h1>
        <p>Here you can find personal investment information.</p>
      </div>
    )
  }
};