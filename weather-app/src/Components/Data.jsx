import React from 'react';
import axios from 'axios';
import {withRouter } from 'react-router-dom';
import next from './Images/next.png';
import snow from './Images/snow.png';
import rain from './Images/rain.png';
import cloudy from './Images/cloudy.png';
import sunny from './Images/sunny.png';
import './CSS/Data.css';
class Data extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          post: null,
        };
      }
    componentDidMount(){
        const params = new URLSearchParams(this.props.location.search);
        const city = params.get('city');
        const date = params.get('date');
        const key = "a6d37cc7b05e400aafeb4664151595ef";
        const baseURL1 = "/weather/?param=temperature&start="+date+"&end="+date+"&location="+city+"&api-key="+key;
        axios.get(baseURL1).then((response) => {
            const post = response.data.data;
            this.setState({post});
          });
    }
    render(){
        const params = new URLSearchParams(this.props.location.search);
        const city = params.get('city');
        const date = params.get('date');
        var imageURL;
        var maxdateObj = new Date();
        maxdateObj.setDate(maxdateObj.getDate()+15);
        var maxdate = maxdateObj.toISOString().split('T')[0];
        var dateObj = new Date(date);
        dateObj.setDate(dateObj.getDate()+1);
        console.log(dateObj);
        console.log(dateObj.toISOString().split('T')[0]);
        var date1 = dateObj.toISOString().split('T')[0];
        dateObj.setDate(dateObj.getDate()-2);
        console.log(dateObj);
        console.log(dateObj.toISOString().split('T')[0]);
        var date2 = dateObj.toISOString().split('T')[0];
        var flag1=0, temp = 0, lat, long; 
        if(this.state.post!=null&&flag1===0){
            const hello = JSON.parse(this.state.post);
            var value = [];
            value = hello.data;
            console.log(value[0][4]);
            var a = [];
            a = value[0][0];
            console.log(a);
            flag1=0;
            var flag2=1;
            var la = "";
            var lo = "";
            for(var i=1;i<a.length-1;i++){
                if(flag1===0){
                    if(a[i]===','){
                        flag1=1;
                        continue;
                    }
                    la += a[i];
                    if(a[i]==='.'){
                        la += a[i+1] + a[i+2];
                        flag1=1;
                    }
                }
                if(flag2===0){
                    lo += a[i];
                    if(a[i]==='.'){
                        lo += a[i+1] + a[i+2];
                        flag2=1;
                    }
                }
                if(a[i]===" "){
                    flag2=0;
                }
            }
            temp = value[0][4];
            console.log(la);
            console.log(lo);
            lat = la;
            long = lo;
        }
        if(!this.state.post){
            return(
                <div>
            <form action="/data">
                <div className="data21">
                <label><p id="label21">Change City:</p></label>
                <input type="text" id="box21" name="city" placeholder="Enter CityName" required/></div>
                <div className="data22">
                <label><p id="label21">Change Date:</p></label>
                <input type="date" id="box22" name="date" required min="1960-01-01" max={maxdate}/></div>
                <button type="submit" id="submission2"><p id="submittext">Get Weather</p></button>
            </form>
            <form action="/data">
                <input type="hidden" name="city" value={city} />
                <input type="hidden" name="date" value={date1} />
                <button type="submit"><img src={next} alt="HTML5" id="nex"/></button>
            </form>
            <form action="/data">
                <input type="hidden" name="city" value={city} />
                <input type="hidden" name="date" value={date2} />
                <button type="submit"><img src={next} alt="HTML5" id="pre"/></button>
            </form>
            <div className="date2">{date}</div>
            <div className="rect21">
                <div className="rect22">{city}</div>
                <div class="loader"></div>
            </div>
            <a href="/compare"><button id="comp">Compare Monthly Weather</button></a>
            </div>
        );
        }
        if(this.state.post!=null){
            if(temp<10){
                imageURL = snow;
            }else if(temp<15){
                imageURL = rain;
            }else if(temp<20){
                imageURL = cloudy;
            }else{
                imageURL = sunny;
            }
        }
        return(
            <div>
            <form action="/data">
                <div className="data21">
                <label><p id="label21">Change City:</p></label>
                <input type="text" id="box21" name="city" placeholder="Enter CityName" required/></div>
                <div className="data22">
                <label><p id="label21">Change Date:</p></label>
                <input type="date" id="box22" name="date" required/></div>
                <button type="submit" id="submission2"><p id="submittext">Get Weather</p></button>
            </form>
            <form action="/data">
                <input type="hidden" name="city" value={city} />
                <input type="hidden" name="date" value={date1} />
                <button type="submit"><img src={next} alt="HTML5" id="nex"/></button>
            </form>
            <form action="/data">
                <input type="hidden" name="city" value={city} />
                <input type="hidden" name="date" value={date2} />
                <button type="submit"><img src={next} alt="HTML5" id="pre"/></button>
            </form>
            <div className="date2">{date}</div>
            <div className="rect21">
                <div className="rect22">{city}</div>
                <div className="lat2">Lat. :- {lat} N Long. :- {long} E</div>
                <img src={imageURL} alt="HTML5" id="img"/>
                <div className="temp2">{temp.toFixed()} C</div>
                <div className="min2">Min:{temp.toFixed()-5} C</div>
                <div className="max2">Max:{(temp+5).toFixed()} C</div>
            </div>
            <a href="/compare"><button id="comp">Compare Monthly Weather</button></a>
            </div>
        );
    }
}
export default withRouter(Data);