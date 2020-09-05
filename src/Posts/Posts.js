import React,{Component} from 'react';
// import {NavLink} from 'react-router-dom';
import './Posts.css';
class Posts extends Component{
    // jobDetailView=(designation)=>{
    //     console.log(this.props)
    //     this.props.history.push({
    //         pathname:'/JobDetail',
    //         search:'?'+designation
    //     })
    // }
    render(){
        //console.log(this.props.data)
        let postsData =[]
         postsData = this.props.data;
        console.log(postsData)
       let data= postsData.map(obj=>{
        return <tr key ={obj.id}>
                    <td>{obj.id}</td>
                    <td onClick ={()=>this.props.jobDetailView(obj.designation)}>{obj.designation}</td>
                    <td>{obj.jobType}</td>
                    <td>{obj.company}</td>
                    <td>{obj.location}</td>
                    <td>{obj.salary}</td>

                </tr>
        })
        return(
            <div>
                <div>
                    <input type ="search" onChange = {this.props.searchData} placeholder = "search for JobRole"/>
                </div>
                <table className= "Posts table table-striped table-bordered table-sm dataTable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Job Role</th>
                            <th>Job Type</th>
                            <th>Company</th>
                            <th>Location</th>
                            <th>Salary</th>
                        </tr>                        
                    </thead>
                    <tbody>                      
                            {data}                      
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Posts