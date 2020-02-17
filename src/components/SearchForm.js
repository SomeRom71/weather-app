import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import StorageCityList from './StorageCityList';

class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      storageListHeight: 0,
      cityName: '',
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const getCityName = formData.get('cityField');
    this.handleBlur();
    return this.props.getWeather(getCityName);
  }

  handleFocus = () => {
     this.setState({
       storageListHeight: 300,
     })
  }

  handleBlur = (event) => {
   this.setState({
     storageListHeight: 0
   })
  }

  handleChange = (event) => {
    this.setState({
      cityName: event.target.value
    })
  }

  getWeatherAndBlur = (cityName) => {
    this.setState({
      cityName: cityName
    })
    this.handleBlur();
    this.props.getWeather(cityName);
  }

  render(){
    return(
      <Form className="searchForm" onSubmit={this.formSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter city name</Form.Label>
          <Form.Control value={this.state.cityName} onChange={this.handleChange} type="text" name="cityField" placeholder="Enter city" autoComplete="off" onFocus={this.handleFocus} onBlur={this.handleBlur} />
          {<StorageCityList height={this.state.storageListHeight} cityList={this.props.cityList} getWeather={this.getWeatherAndBlur} />}
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    )
  }
}

export default SearchForm;
