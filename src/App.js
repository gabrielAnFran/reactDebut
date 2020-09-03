import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { name: '....', age: 28 },
      { name: 't', age: 28 },

      { name: 's', age: 28 },

     ],
     showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Max', age: 28 },
        { name: newName, age: 28 }

      ]
    });
  };

  nameChangedHandler = (event)=>{
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: event.target.value, age: 28 },
        { name: event.target.value, age: 28 }
      ]

    })
  };
  
  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }
 

  render() {
    const style = {
      backgroundColor:'pink',
      font: 'inherit',
      border: '2px solid orange',
      padding: '8px',
      cursor: 'pointer'

    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style}
        onClick={this.togglePersonsHandler}>Toggle</button>
      
      {  this.state.showPersons ? 
        <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        />
       
       </div> : null
       }

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

