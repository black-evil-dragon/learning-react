import './css/App.css';
import Info from './component/info';
import Form from './component/form';
import Weather from './component/weather';
import React, { Component } from 'react';
import config from './config.json'

const API = config.API

export default class App extends Component {
	state = {
		temp: undefined,
		city: undefined,
		country: undefined,
		sunrise: undefined,
		sunset: undefined,
		pressure: undefined,
		error: '0'
	}
	getWeather = async (event) => {
		event.preventDefault();

		const target_city = event.target.elements.city.value;

		if (target_city) {
			const API_url = await
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${target_city}&appid=${API}&units=metric`);
			const result = await API_url.json();
			console.log('JSON result \n', result)

			var sunrise = result.sys.sunrise;
			var sunset = result.sys.sunset;

			var date = new Date(sunrise*1000);
			var sunrise_time = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);

			date = new Date(sunset*1000);
			var sunset_time = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);

			this.setState({
				temp: result.main.temp,
				city: result.name,
				country: result.sys.country,
				sunrise: sunrise_time,
				sunset: sunset_time,
				pressure: result.main.pressure,
				error: '0'
			});
		};
	}
	render() {
		return (
			<div className="app-block container-fluid d-flex justify-content-center align-items-center">
				<div className="row">
					<div className="col">
						<Info />
						<Form weatherMethod={this.getWeather}/>
						<Weather
							temp={this.state.temp}
							pressure={this.state.pressure}
							city={this.state.city}
							country={this.state.country}
							sunrise={this.state.sunrise}
							sunset={this.state.sunset}
							error={this.state.error}
						/>
					</div>
				</div>
			</div>
		);
	}
}

