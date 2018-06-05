import React, { Component } from 'react';
import axios from 'axios';
import Button from 'muicss/lib/react/button';
import './SensorData.css'

class SensorData extends React.Component{
    baseUrl = 'http://192.168.1.43:3000';
    constructor(props){
    super(props);
    this.state = {
            temp: 0,
            humidity:0
        }
    }

    componentDidMount() {
        this.loadDataFromRaspberryPi();
      }
    
    render(){
        const title = 'This data is pulled from a DHT22 Temperature and Humidity Sensor running on a Raspberry Pi 3.';
        return(
            <div>
                <div className="title">{title}</div>
                <div className="content">
                <div>Temperature is: {this.state.temp.toFixed(2)}°C</div>
                <div>Humidity is: {this.state.humidity.toFixed(2)}%</div>    
                </div> 
                <Button variant="raised" color="primary" onClick={() => this.reloadData()}>Reload</Button>       
            </div>
        ); 
    }
    reloadData(){
        this.loadDataFromRaspberryPi();
    }

    loadDataFromRaspberryPi(){
        console.log('Loading new Sensor Data started...');
        axios.post(`${this.baseUrl}/sensordata`)
          .then(res => {
            const sensordata = res.data;
            this.setState({
                temp: sensordata.temp,
                humidity: sensordata.humidity
            });
          })
    }
}

export default SensorData;