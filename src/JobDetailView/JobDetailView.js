import React ,{Component}from 'react';
import './JobDetailView.css';
//import { MDBIcon } from "mdbreact";
class JobDetailView extends Component{
    jobListView=()=>{
        this.props.history.push({
            pathname:'/'              
        }) 
    }
    render(){
        return (
            <div>
                 <button onClick ={this.jobListView}>gotoJobsList</button> 
                <div className = "JobDetailHeader">
                    <div>
                        <div className = "job-detail-title">Vesatogo - React.js Developer - HTML5/CSS/Javascript</div>
                    </div>
                    <div className = "company-detail-wrapper">
                        <div> Vesatogo</div>
                        <span className = "seperator"></span>
                        <div> Nashik </div>
                        <span className = "seperator"></span>
                        <div> 0-2 years</div>
                    </div>
                    <div className = "align-skills">
                        <div className = "skillsWrapper">ReactJs</div>
                        <div className = "skillsWrapper">HTML5</div>
                        <div className = "skillsWrapper">CSS</div>
                        <div className = "skillsWrapper">Javascript</div>
                        <div className = "skillsWrapper">RestAPI</div>
                        <div className = "skillsWrapper">DataStructures</div>
                        <div className = "skillsWrapper">ES6</div>
                        <div className = "skillsWrapper">TypeScript</div>
                        <div className = "skillsWrapper">AWS</div>
                    </div>
                    <div>
                       <span>Last Date 19 OCT 2020</span>
                       <button type="button" style ={{  padding: '8px',height: "27px",lineHeight: '1px',
                            fontSize: '14px',textTransform:'none'}}className = "btn btn-amber">Apply Now</button>
                    </div>
                </div>
                <div className = "content-container">
                    <div className = "details-container">
                        <div className = "details new-color">
                            <p>
                                <b>About Vesatogo</b>
                                <br></br>
                                -In India, more than 80% of farmers are marginal farmers, having land holding of less than 5 acres. This is the prime reason why they are unable to purchase resources of their own.  The cost of hiring resources e.g., transportation services is 12-15% of the total income. Also, most of the time the resources are not 
                                    optimally  utilized due to part loading and service providers having access to limited set of farmers and vice versa.                                    
                                <br></br>
                                <br></br>
                                    -Vesatogo is a platform providing efficient and economical logistics options to the marginal farmers of the country and also ensuring optimal utility of resources.
                                <br></br>
                                <br></br>
                                    -Vesatogo is working in association with Sahyadri Farms, one of the largest Farmer Producer Organization in the country, acting as implementation partner. TATA Motors Mobility Innovation Labs is providing expert guidance and mentoring. The seed funding and guidance is provided by Digital Impact Square, a TCS Foundation Initiative.
                                <br></br>
                                <br></br>
                                    -Vesatogo is currently being developed for FPOs and their associated farmers, helping them in identifying and removing inefficiencies in their operations and also saving cost for the farmer. This model once developed can be scaled to all the FPOs in the country.
                                <br></br>
                                <br></br>
                                    <br></br> 
                                <b>Skills we are looking for :</b>
                                <br></br>
                                <br></br>
                                - Experience in developing front-end applications at scale
                                <br></br>
                                - Strong knowledge and experience in HTML(5), CSS, SCSS and Advanced JavaScript
                                <br></br>
                                - Experience of writing modular/reusable code and using JS frameworks like React.js
                                <br></br>
                                - Experience with data structure libraries (e.g., Immutable.js)
                                <br></br>
                                 - Familiarity with RESTful APIs
                                 <br></br>
                                - Strong knowledge of Web Storage (Cookie, Local Storage and Session Storage)
                                <br></br>
                                - Knowledge of modern authorization mechanisms, such as JWT
                                <br></br>
                                - Familiarity with modern front-end build pipelines and tools
                                <br></br>
                                - Hands-on experience of building web apps using React.
                                <br></br>
                                - Deep understanding of Javascript programming language and ES6.
                                <br></br>
                                - Ability to work in a lean-agile development environment.
                                <br></br>
                                <br></br>
                                <br></br>
                                <b>Good to know :</b>
                                <br></br>
                                <br></br>
                                - Proficiency in TypeScript and/or Flow
                                <br></br>
                                - Knowledge of AWS
                                <br></br>
                                - Familiarity with GraphQL will be a brownie point
                            </p>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
        )
    }
}
export default JobDetailView