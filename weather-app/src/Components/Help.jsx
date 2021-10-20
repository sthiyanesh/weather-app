import React from 'react';
import './CSS/Help.css'
import { withRouter } from 'react-router-dom';
class Help extends React.Component{
    render(){
        return(
            <div> 
                <div className="content">
                    <p id="cont">
                        Quick Weather Reporter:<br /><br />
                        A Website where You can Find Weather Details Quicker.<br /><br />
                        In the Home Page, Enter the City Name and Date to get the Weather Details of the Particular Day.<br /><br />
                        In the Data Page, The Option in the Home Page is Also Available to change city and Date. <br/><br/>
                        The Next Button gives you the Next day Weather details of the same City.
                        The Previous Button gives you the Previous day Weather details of the same city.<br/><br/>
                        The Compare Monthly Weather will get you to the Compare page where you can add details on which you want to compare and click compare button.<br/><br/>
                        In the Graph Page you can see a line chart comparing the particular weathers.<br/><br/><br/>
                        The Resources are taken from the Oiko Lab Website:<br/>
                        <a href="https://oikolab.com/api-details#api=weather">https://oikolab.com/api-details#api=weather</a>
                    </p>
                </div>
            </div>
        );
    }
}
export default withRouter(Help);