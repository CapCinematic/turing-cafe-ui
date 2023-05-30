import React, { Component } from 'react';
import './App.css';
import ReservationForm from '../form';

// import fetchCall from '../apiCalls';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        reservations: []
      }
    }
    
    componentDidMount(){
      fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.error(error))
    }
    
    render() {
      return (
        <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.state.reservations.map(reservation => (
            <div key={reservation.id}>
              <h2>{reservation.name}</h2>
              <p>{reservation.date} at {reservation.time}</p>
              <p>{reservation.number}</p>
            </div>  
          ))}
        </div>
      </div>
    )
  }
}


export default App;
