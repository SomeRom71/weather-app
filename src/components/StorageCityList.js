import React from 'react';

const StorageCityList = (props) => {
  return(
    <>
      <div className="city-list" style={{height: + props.height + 'px'}}>
      <span>Searched earlier:</span>
      <ul className="list-group">
        { props.cityList.map(cityName => <li onClick={() => props.getWeather(cityName)} key={cityName} className="list-group-item">{cityName}</li>) }
      </ul>
      </div>
    </>
  )
}

export default StorageCityList;
