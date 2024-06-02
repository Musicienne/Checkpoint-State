import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    person: {
      fullName: "Aymen Derouiche",
      bio: "I studied computer network for 2 years and 6 months fullstack development at Gomycode and I now work as a fullstack developer.",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s",
      profession: "Software developer",
    },
    show: false,
    timeInterval: 0
  };
handleClick = () => {this.setState({show : !this.state.show})}
  render() {
    const {person,show,timeInterval} = this.state
    
    return (
      <div>
        { 
        show &&<div>
          <h2> Person </h2>
          <img src={person.imgSrc}/>
          <p> fullName : {person.fullName} </p>
          <p> bio : {person.bio} </p>
          <p>profession : {person.profession }</p>
        </div>
        }
        <button onClick={this.handleClick}>
          Click me!
        </button>
      </div>
    );
  }
}

export default App;
