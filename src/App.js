// app.js
import React, { Component } from 'react';
import './App.css';
import LicenseForm from './components/LicenseForm';
import { Container } from 'semantic-ui-react';

class App extends Component {

  render() {
    return(
      <Container textAlign='center'>
        <LicenseForm />
      </Container>     )
  }
}

export default App;




