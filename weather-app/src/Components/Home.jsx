import React from 'react';
import './CSS/Home.css';
import { withRouter } from 'react-router-dom';
class Home extends React.Component{
    render(){
        var maxdateObj = new Date();
        maxdateObj.setDate(maxdateObj.getDate()+15);
        var maxdate = maxdateObj.toISOString().split('T')[0];
        return(
            <div>
                <h1 id="hometitle">The Page where you can get Weather Details Quicker</h1>
                <form action="/data">
                    <div className="data11">
                    <label><p id="label11">City Name:</p></label>
                    <input type="text" id="box11" name="city" placeholder="Enter CityName" required /></div>
                    <div className="data12">
                    <label><p id="label11">Date:</p></label>
                    <input type="date" id="box12" name="date" required min="1960-01-01" max={maxdate}/></div>
                    <button type="submit" id="submission1"><p id="submittext">Get Weather Data</p></button>
                </form>
            </div>
        );
    }
}
export default withRouter(Home);