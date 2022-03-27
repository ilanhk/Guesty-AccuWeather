import React from 'react'
import moment from 'moment';

const DayWeather = ({ dayDate, temp, iconStuff }) => {
  return (
    <div style={{display: 'flex', margin: '0 auto', maxWidth: '800px' }}>
      <div className='dayDate'>
        <div className='day'>{moment.parseZone(dayDate).utc().format('ddd')}</div>
        <div className='date'>{moment.parseZone(dayDate).utc().format('M/D')}</div>
      </div>
      {iconStuff.Icon >= 10 ? 
      <img src={`https://developer.accuweather.com/sites/default/files/${iconStuff.Icon}-s.png`} alt="" className="icon"/> :
      <img src={`https://developer.accuweather.com/sites/default/files/0${iconStuff.Icon}-s.png`} alt="" className="icon"/>
      }
      
      <div className='tempMax'>{temp.Maximum.Value}°</div>
      <div className='tempMin'>/{temp.Minimum.Value}°</div>
      <div className='temp-description'>{iconStuff.IconPhrase}</div>

    </div>
  )
};

export default DayWeather;