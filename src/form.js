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
}

export default ReservationForm;