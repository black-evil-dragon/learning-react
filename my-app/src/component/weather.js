import React from "react";

const Weather = (props) => {
    return (
        <div>
            {props.city && (
                <div>
                    <p>
                        {props.city}, {props.country}
                    </p>
                    <p>{props.temp}</p>
                    <p>{props.pressure}</p>
                    <p>
                        {props.sunrise}, {props.sunset}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Weather;
