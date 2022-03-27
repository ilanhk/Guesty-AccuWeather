import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Container, Card, ListGroup} from 'react-bootstrap';
import DayWeather from './DayWeather';

const WeatherForWeek = () => {

    const [weather_report, setWeather_report] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'http://localhost:5000/weather'
        }

        axios.request(options).then((response) => {
           
            console.log(response.data.DailyForecasts);
            setWeather_report(response.data.DailyForecasts);
        
        }).catch((error) => {
            console.error(error)
        });
    }, []);


  return (
        <Container>
            <h1 className='text-primary'>Weather For Madrid</h1>
                <ListGroup horizontal>
                    {weather_report.map((weatherToday, index)=>{
                       return ( <ListGroup.Item key={index}>
                            <Card >
                                <DayWeather
                                    dayDate={weatherToday.Date}
                                    temp={weatherToday.Temperature} 
                                    iconStuff={weatherToday.Day}
                                />
                            </Card>
                        </ListGroup.Item> )
                    })}
                </ListGroup>
        </Container>
  )
}

export default WeatherForWeek