import axios from 'axios'
import React, { useState } from 'react'
import Style from './Style.module.css'
import WeatherResult from './WeatherResult.jsx'


function WeatherInput({get_data}) {
 
  const [cityName,setCityName]=useState("")
  const [data, setData]=useState()

  function Onsubmit(e){
    e.preventDefault()
    getData(cityName)
  }
   function getData(cityName){
            const api =`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=c2965f463fd1030468730b6b9d4096a8`
            axios.get(api).then((res)=>{
            setData(res)
            })
            .catch((error)=>{
              console.error(error)
            })

  }
  function handleChange(e){
       setCityName(e.target.value)
  }
   
 

   
      
 
  return (
     data === undefined ? 
     <div className={Style.Container}>
     <span className={Style.AppTitle}>React Weather App</span>
     <img className={Style.WelcomeWeatherLogo} src="./Icons/perfectDay.svg" alt="day" />
     <span className={Style.ChooseCityLabel}>Find Weather of your city
     </span>

     <div className={Style.SearchBox}>
         <input type="text" placeholder="Enter Your City" onChange={handleChange} />
         <button  type={"submit"} onClick={Onsubmit}>Search</button>
     </div>
   </div> :
   <WeatherResult data={data}/>  
  )
}

export default WeatherInput