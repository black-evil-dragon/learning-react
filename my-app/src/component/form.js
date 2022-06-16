import React, { Component } from "react";

export default class form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.weatherMethod}>
                    <input type="text" name="city" placeholder="Город"></input>
                    <button>Получить погоду</button>
                </form>
            </div>
        );
    }
}
