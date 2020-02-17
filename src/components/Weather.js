import React from 'react';
import { Table } from 'react-bootstrap';

const Weather = (props) => {

  if (props.data.cod === '404') {
    return (
      <div className="not-found">
        Oops... There is no such city!
        <img className="not-found__img" src="https://i.pinimg.com/originals/25/d9/90/25d990dc7872181f5f2841533bce52d2.gif" alt="404" />
      </div>
    );
  }

  const { cityName } = props.data;
  const { country } = props.data.sys;
  const { main, description, icon } = props.data.weather[0];
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = props.data.main; // https://medium.com/podiihq/destructuring-objects-in-javascript-4de5a3b0e4cb
  const { speed } = props.data.wind;

  return (
    <div className="weather">
      <div className="weather__header">
        <h2 className="weather__place">Weather in {cityName}, {country}</h2>
        <span className="weather__temp">
          <span className="weather__description">{main}</span>
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon"/>
          <b>{temp} °C</b>
        </span>
      </div>
      <Table striped bordered size="sm">
        <tbody>
          <tr>
            <td>Wind</td>
            <td>{speed} M/s</td>
          </tr>
          <tr>
            <td>Cloudiness</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td>Feels like</td>
            <td>{feels_like}</td>
          </tr>
          <tr>
            <td>Temp-min / Temp-max</td>
            <td>{temp_min} / {temp_max}</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{pressure} hpa</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{humidity} %</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Weather;
