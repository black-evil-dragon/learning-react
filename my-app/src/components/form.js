import React, { Component } from "react";

export default class form extends Component {
    render() {
        return (
            <div className="app-form">
                <form onSubmit={this.props.weatherMethod}>
                    <input type="text" name="city" placeholder="Город"></input>
                    <button>🔎</button>
                </form>
            </div>
        );
    }
}
