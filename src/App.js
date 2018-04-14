import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Hello World!, This is Sachin :)';
    const companyName = 'Accenture';
    const jobTitle = 'Full Stack Drupal Developer';

    const list = [
      {
        name: 'Sachin',
        company: 'Accenture',
        job: 'Full Stack Developer',
        objectID : 1
      },
      {
        name: 'Dipali',
        company: 'Xorient',
        job: 'UI Developer',
        objectID: 2
      }
    ];

    return (
      <div className="App">
        {list.map(item =>
          <div key={item.objectID}>
            <span>Name: {item.name}</span>
            <span>Company: {item.company}</span>
            <span>Job Title: {item.job}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
