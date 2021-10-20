import React from 'react';
import './CSS/Graph.css';
import { Line } from "react-chartjs-2";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class Graph extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          post1: null,
          post2: null,
          data1: null,
          data2: null
        };
      }
    componentDidMount(){
        const params = new URLSearchParams(this.props.location.search);
        const city1 = params.get('city1');
        const subject1 = params.get('subject1');
        var value1,value2;
        var baseURL1,baseURL2;
        if(subject1==="year"){
            const year1 = params.get('service1');
            value1 = {city:city1,year:year1};
            baseURL1 = "/singleweather";
            this.setState({data1:year1+" - "+city1+" weather"})
        }else{
            value1 = {city:city1};
            baseURL1 = "/avgweather";
            this.setState({data1:"Average "+city1+" weather"})
        }
        const city2 = params.get('city');
        const subject2 = params.get('subject2');
        if(subject2==="year"){
            const year2 = params.get('service2');
            value2 = {city:city2,year:year2};
            baseURL2 = "/singleweather"
            this.setState({data2:year2+" - "+city2+" weather"})
        }else{
            value2 = {city:city2}
            baseURL2 = "/avgweather"
            this.setState({data2:"Average "+city2+" weather"})
        }
        const reqOne = axios.post(baseURL1,value1);
        const reqTwo = axios.post(baseURL2,value2);

        axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
        const post1 = responses[0].data;
        const post2 = responses[1].data;
        console.log(responses[0].data);
        console.log(responses[1].data);
        this.setState({post1:post1});
        this.setState({post2:post2});
        })).catch(errors => {
        // react on errors.
        })
    }
    render(){
        var flag1=0;
        var hello1 = [0,0,0,0,0,0,0,0,0,0,0,0];
        var hello2 = [0,0,0,0,0,0,0,0,0,0,0,0];
        if(this.state.post1!=null&&flag1===0){
            flag1=1;
            for(var i=0;i<12;i++){
                hello1[this.state.post1[i].month-1] = this.state.post1[i].temp;
            }
        }
        var flag2=0;
        if(this.state.post2!=null&&flag2===0){
            flag2=1;
            for(var j=0;j<12;j++){
                hello2[this.state.post2[j].month-1] = this.state.post2[j].temp;
            }
        }
        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","July","Aug","Sept","Oct","Nov","Dec"],
            datasets: [
              {
                label: this.state.data1,
                data: hello1,
                fill: false,
                borderColor: "rgba(75,192,192,1)"
              },
              {
                label: this.state.data2,
                data: hello2,
                fill: false,
                borderColor: "#742774"
              }
            ]
          };
        return(
            <div><div className="topic">Compare Monthly Weather of Cities</div>
            <div className="charts">
                <Line data={data}/>
            </div>
            </div>
        );
    }
}
export default withRouter(Graph);