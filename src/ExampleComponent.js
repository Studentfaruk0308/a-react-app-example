import React, { Component } from 'react';
import Faruk from './Faruk';

// no need to modify anything in here. The second test is looking for the returned JSX from this component
class ExampleComponent extends Component {
  render() {
    return (
      <div className="example">
        <img src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif" alt="a deeply impressed man, perhaps thinking 'whoa'"/>
        <p>Whoa!</p>
        <img src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif" alt="a deeply impressed man, perhaps thinking 'whoa'"/>
        <p>Whoa!</p>
        <br />
        <Faruk />
        <br />
      </div>
      
    );
  }
}

export default ExampleComponent;
