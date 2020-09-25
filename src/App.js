import React from "react";
import Form from "./Form";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Cloudy from "./images/03d.png";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./index.css";
import "./App.css";

export default function App({ city }) {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <Form />
            <Row1 city="Glasgow" />
            <Row2
              date="Sunday"
              time="00:00"
              description="Scattered clouds"
              country="GB"
            />
            <Row3
              temperature={17}
              humidity={80}
              wind={9}
              imgSrc={Cloudy}
              imgAlt="Scattered Clouds"
            />
            <hr className="hr-1" />
            <Forecast
              day="Mon"
              imgSrc={Cloudy}
              imgAlt="Cloudy"
              minTemp={10}
              maxTemp={13}
            />
            <Forecast
              day="Tue"
              imgSrc={Cloudy}
              imgAlt="Cloudy"
              minTemp={10}
              maxTemp={13}
            />
            <Forecast
              day="Wed"
              imgSrc={Cloudy}
              imgAlt="Cloudy"
              minTemp={10}
              maxTemp={13}
            />
            <Forecast
              day="Thu"
              imgSrc={Cloudy}
              imgAlt="Cloudy"
              minTemp={10}
              maxTemp={13}
            />
            <Forecast
              day="Fri"
              imgSrc={Cloudy}
              imgAlt="Cloudy"
              minTemp={10}
              maxTemp={13}
            />
            <Forecast
              day="Sat"
              imgSrc={Cloudy}
              imgAlt="Cloudy"
              minTemp={10}
              maxTemp={13}
            />
            <hr className="hr-2" />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
