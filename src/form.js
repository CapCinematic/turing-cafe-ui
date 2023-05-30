import React, { Component } from 'react';
import App from './App/App';

class ReservationForm extends Component{
  constructor(props){
    super(props);
    this.state ={
      name : '',
      date : '',
      time : '',
      number: ''
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const { name, date, time, number } = this.state;
    const reservation = { name, date, time, number };
    this.props.addReservation(reservation);
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    const { name, date, time, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' value={name} onChange={event => this.setState({name: event.target.value})}/>
        </label>
        <label>
          Date:
          <input type='text' value={date} onChange={event => this.setState({date: event.target.value})}/>
        </label>
        <label>
          Time:
          <input type='text' value={time} onChange={event => this.setState({time: event.target.value})}/>
        </label>
        <label>
          Number:
          <input type='text' value={number} onChange={event => this.setState({number: event.target.value})}/>
        </label>
        <button type="submit">Make Reservation</button>
      </form>
    )
  }
}

export default ReservationForm;