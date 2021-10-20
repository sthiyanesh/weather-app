import React from 'react';
import './CSS/Compare.css'
import { withRouter } from 'react-router-dom';
class Compare extends React.Component{
    constructor() {
        super();
        this.state = {
          service1: "",
          subject1: "",
          service2: "",
          subject2: ""
        };
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };
    render(){
        return(
            <form action='./graph'>
                <div className="topic">Compare Monthly Weather of Cities</div>
                <div className="box31">
                    <div className="box33">City 1</div>
                    <label><p id="label31">City Name:</p></label>
                    <select type="select" name="city1" id="city31" required>
                        <option>Chennai</option>
                        <option>Bangalore</option>
                        <option>Kolkata</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>SriNagar</option>
                    </select>
                    <label id="input31">
                        <input type="radio" name="subject1" checked={this.state.subject1 === "average"}
                        onChange={this.handleChange} value="average" required />{" "}
                    Average of Past 25 Year
                    </label>
                    <label id="input32">
                        <input type="radio" name="subject1" checked={this.state.subject1 === "year"}
                        onChange={this.handleChange} value="year" required />{" "}
                    Particular Year
                    </label>
                    <select type="select" id="input33" name="service1" disabled={this.state.subject1 !== "year"}
                    onChange={this.handleChange} value={this.state.service} >
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                    </select>
                </div>
                <div className="box32">
                    <div className="box33">City 2</div>
                    <label><p id="label31">City Name:</p></label>
                    <select type="select" name="city" id="city31" required>
                        <option>Chennai</option>
                        <option>Bangalore</option>
                        <option>Kolkata</option>
                        <option>Mumbai</option>
                        <option>Delhi</option>
                        <option>SriNagar</option>
                    </select>
                    <label id="input31">
                        <input type="radio" name="subject2" checked={this.state.subject2 === "average"}
                        onChange={this.handleChange} value="average" required />{" "}
                    Average of Past 25 Year
                    </label>
                    <label id="input32">
                        <input type="radio" name="subject2" checked={this.state.subject2 === "year"}
                        onChange={this.handleChange} value="year" required/>{" "}
                    Particular Year
                    </label>
                    <select type="select" id="input33" name="service2" disabled={this.state.subject2 !== "year"}
                    onChange={this.handleChange} value={this.state.service}>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                    </select>
                </div>
                <button type="submit" id="compare31">Compare</button>
            </form>
        );
    }
}
export default withRouter(Compare);