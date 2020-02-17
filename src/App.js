import React, { Component } from 'react';
import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import getWeather from './services/weather.service';
import { getСityListFromStorage, setCityToStorage } from './services/storage.helper';
import { connect } from 'react-redux';
import { setWeather, setCityList } from './actions'

class App extends Component{
  componentDidMount() {
    this.setCityListToState();
  }

  getWeather = (cityName) => {
    setCityToStorage(cityName);
    this.setCityListToState();

    getWeather(cityName)
      .then(weatherData => {
        const payload = {
          cityName: cityName,
          ...weatherData,
        };

        this.props.setWeather(payload);
      })
  }

  setCityListToState() {
    const storageCityList = getСityListFromStorage();
    this.props.setCityList(storageCityList);
  }

  render() {
    return(
      <>
        <SearchForm getWeather={this.getWeather} cityList={this.props.cityList} />
        {this.props.weather.cityName && <Weather data={this.props.weather} />}
      </>
    );
  };
}

function mapStateToProps (state) {
  return {
    weather: state.weather,
    cityList: state.cityList
  }
}

const mapDispatchToProps = dispatch => ({
  setWeather: (weather) => dispatch(setWeather(weather)),
  setCityList: (cityList) => dispatch(setCityList(cityList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
