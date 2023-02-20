import moment from 'moment/moment';
import React from 'react'
import result from './result.module.css'

function WeatherResult({data}) {
        console.log(data);
    const {data:{main}}=data
    const {data:{timezone}}=data
    const {data:{weather}}=data
    const {data:{wind:{speed}}}=data
    const {data:{sys:{sunrise,sunset}}}=data
    const {humidity,pressure,temp}= main

    const isDay = weather[0].icon?.includes('d')

    const Sunrise = moment.utc(sunrise,'X').add(timezone,'seconds').format('HH:mm a');
    const Sunset = moment.utc(sunset,'X').add(timezone,'seconds').format('HH:mm a');
  return (

    <div className={result.Container}>
        <span className={result.AppTitle}>React Weather App</span>

        <div className={result.InfoContainer} >
            
            < span className={result.InfoLabel} >
            {(temp-273).toFixed(2)}°C <span>{`|${weather[0].description}`}</span>
            </span>
            < img className={result.InfoIcon}  src='./Icons/cloudyNight.svg' alt='Weather-info'/>
        </div>
        
        <div className={result.WeatherContainer}>
        <span className={result.condition}>{data.data.name}</span>
        </div>
        <span className={result.WeatherInfoLabel} >Weather Info</span>

        <div className={result.WeatherInfoContainer}>

            <div className={result.WeatherResult}>
                <img src={isDay ?'./Icons/cloudy-night.svg' :"./Icons/temp.svg"} alt="icon" />
                <span className={result.span}>
                {isDay ? Sunset :Sunrise }
                <span>{isDay ?  "Sunset":"Sunrise" }</span>
                </span> 
            </div>

            <div className={result.WeatherResult}>
                <img src="./Icons/humidity.svg" alt="" />
                <span className={result.span}>{humidity}
                <span>Humidity</span>
                </span> 
            </div>

            <div className={result.WeatherResult}>
                <img src="./Icons/wind.svg" alt="" />
                <span className={result.span}>{speed}
                <span>Wind</span>
                </span> 
            </div>

            <div className={result.WeatherResult}>
                <img src="./Icons/pressure.svg" alt="" />
                <span className={result.span}>{pressure}
                <span>Pressure</span>
                </span> 
            </div>

            
        </div>
        
    </div>
  )
}

export default WeatherResult