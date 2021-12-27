import React from "react";
import Forecast from "./Forecast.js";

export default function Weather(){
    return(
         <div className="application">
      <div className="main-container">
        <div className="Weather-body">
          <div className="search-form">
            <form id="search-engine">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter a city..."
                  id="search-city-input"
                  autocomplete="off"
                />
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="weather-info">
        <div className="row">
          <h1> Clear Sky</h1>
          <div className="city-name">
            <h3>
              Accra <i className="fas fa-home"></i>
            </h3>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="main-temp">
                <span>
                  <img
                    src="/images/icon-main.png"
                    alt="weather-icon"
                    id="icon"
                  />
                  </span>
              </div>
              <div className="col-12">
                <span>
                  <h3 class="main-temperature">
                    <span id="main-temp"> 29</span>
                    <button href="" id="celciusLink" className="unit">
                      °C |
                    </button>
                    <button id="fahrenheitLink" className="unit">
                      °F
                    </button>
                  </h3>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="Time-info">
          <div className="my-clock">
            <span className="time">
              Last updated{" "}
              <h3 class="time" id="date-time">
                Wednesay 12:45
              </h3>
            </span>
          </div>
        </div>

        <div class="weather-details">
          <div class="row">
            <div class="col-8 col-sm-4">
              <span class="details"> Wind </span>
              <br />
              <span>
                <small id="wind"></small>5km/h
              </span>
            </div>
            <div class="col-8 col-sm-4">
              <span class="details">Humidity</span>
              <br />
              <span>
                <small id="humidity"></small>79%
              </span>
            </div>
            <div class="col-8 col-sm-4">
              <span class="details">Pressure</span> <br />
              <span>
                <small id="pressure"></small>1010mb
              </span>
            </div>
          </div>
        </div>
      </div>
            
      <div>
        
          <footer>
                         <a
                            href="https://github.com/Boakyewaa/weather-app" target="_blank">open-sourcecode</a> by <span class="coder-name">Berlie </span> 
                    </footer>
        
      </div>
    </div>
    );
}