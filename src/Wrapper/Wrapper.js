import React ,{Component}from 'react';
import Posts from '../Posts/Posts';
import Pagination from '../Pagination/Pagination'; 
// import {withRouter} from 'react-router-dom'
import './Wrapper.css';
class Wrapper extends Component{
    state={
        posts:[],
        loading:false,
        recordsPerPage :5,
        currentPage:1,
        indexOfLastPage:0,
        indexOfPreviousPage:0
    }
    data =[];
    
    componentDidMount(){
        console.log("wrapper.js componentDidMount")
       this.data =[
            {id:1,designation:'sr software engineer',jobType:'fulltime',company:'vesatogo',location:'nashik',salary:'$2000'},
            {id:2,designation:'jr software engineer',jobType:'fulltime',company:'flipkart',location:'hyderabad',salary:'$3100'},
            {id:3,designation:'sales executive',jobType:'fulltime',company:'wintij',location:'bangalore',salary:'$5300'},
            {id:4,designation:'Testing',jobType:'fulltime',company:'vyapar',location:'mumbai',salary:'$2030'},
            {id:5,designation:'Database Administrator',jobType:'fulltime',company:'medinin',location:'chennai',salary:'$3065'},
            {id:6,designation:'Product Manager',jobType:'fulltime',company:'nueve',location:'vizag',salary:'$4766'},
            {id:7,designation:'support',jobType:'fulltime',company:'mouri tech',location:'pune',salary:'$8745'},
            {id:8,designation:'Technical Consultant',jobType:'fulltime',company:'verizon',location:'gurgoan',salary:'$7465'},
            {id:9,designation:'associate software engineer',jobType:'fulltime',company:'teradata',location:'ahmedabad',salary:'$8746'},
            {id:10,designation:'Accoutant',jobType:'fulltime',company:'amazon',location:'Dallas',salary:'$6472'},
            {id:11,designation:'Accoutant',jobType:'fulltime',company:'amazon',location:'Dallas',salary:'$6472'}
        ]
        let initialData = this.data.slice(0,5)
        this.setState({
            posts:initialData,
            loading:true,
            indexOfLastPage:5,
            indexOfPreviousPage:0

        })
    }
    currentPage=(currentPage)=>{
        console.log(currentPage)
        let records = this.state.recordsPerPage
        let indexOfLastPage = currentPage*records;
        let indexOfPreviousPage = (currentPage-1)*records;
        console.log(indexOfPreviousPage)
        console.log(indexOfLastPage)
        console.log(this.data)
        let postsPerPage= this.data.slice(indexOfPreviousPage,indexOfLastPage);
        console.log(postsPerPage)
        this.setState({
            posts:postsPerPage,
            currentPage:currentPage,
            indexOfLastPage:indexOfLastPage,
            indexOfPreviousPage:indexOfPreviousPage
        })
    }
    previousPage =()=>{
        //console.log("prevPage")
        //console.log(this.state.currentPage)
        let prevPageNo = this.state.currentPage;
        //let postsPerPage=0;let indexOfLastPage;let indexOfPreviousPage
        if(prevPageNo>1){
           // console.log("in prev")
            let records = this.state.recordsPerPage
            let indexOfLastPae = (prevPageNo-1)*records;
            let indexOfPreviousPag = (prevPageNo-2)*records;
            //console.log("indexOfPreviousPag="+indexOfPreviousPag)
            //console.log("indexOfLastPae="+indexOfLastPae)
            //console.log(this.data)
            let postsPerPag= this.data.slice(indexOfPreviousPag,indexOfLastPae);
            //console.log(postsPerPag)
            this.setState({
                posts:postsPerPag,
                currentPage:prevPageNo-1,
                indexOfLastPage:indexOfLastPae,
                indexOfPreviousPage:indexOfPreviousPag
            })
        }
    }
    nextPage =(nxtPage)=>{
        console.log("nextPage="+nxtPage)
        console.log(this.state.currentPage)
        let prevPageNo = this.state.currentPage;
        //let postsPerPage=0;let indexOfLastPage;let indexOfPreviousPage
        if(prevPageNo<nxtPage){
            //console.log("in next")
            let records = this.state.recordsPerPage
            let indexOfLastPae = (prevPageNo+1)*records;
            let indexOfPreviousPag = (prevPageNo)*records;
            console.log("indexOfPreviousPag="+indexOfPreviousPag)
            console.log("indexOfLastPae="+indexOfLastPae)
            console.log(this.data)
            let postsPerPag= this.data.slice(indexOfPreviousPag,indexOfLastPae);
            console.log(postsPerPag)
            this.setState({
                posts:postsPerPag,
                currentPage:prevPageNo+1,
                indexOfLastPage:indexOfLastPae,
                indexOfPreviousPage:indexOfPreviousPag
            })
        }
    }
    searchforData=(event)=>{
        console.log(event.target.value)
        let filteredData =[];
        filteredData = this.data.filter(value=>value['designation'].includes(event.target.value)).map(filteredName=> filteredName)
        
        console.log(filteredData)
        this.setState({
            posts:filteredData
        })
    }
    jobDetailView=(designation)=>{
            console.log(this.props)
            this.props.history.push({
                pathname:'/JobDetail',
                search:'?'+designation
            })
        }
    jobListView=()=>{
        this.props.history.push({
            pathname:'/'              
        }) 
    }
    render(){
        console.log(this.state.posts)
        let totalNoOfPages = [];
        console.log("=="+Math.ceil(this.data.length/this.state.recordsPerPage))
        for(let i=1;i<=Math.ceil(this.data.length/this.state.recordsPerPage);i++){
            totalNoOfPages.push(i);
        }
        console.log("wrapper.js render")
        let postsData = <p>Loading...</p>
        if(this.state.loading)
           postsData = <Posts data = {this.state.posts} searchData={this.searchforData} jobDetailView={this.jobDetailView}/>
        console.log(this.data)
        return(
            <div className = "Wrapper">
                 {postsData}
                <Pagination fromValue ={this.state.indexOfPreviousPage} 
                    presentCount = {this.state.indexOfLastPage} totalCount = {this.data.length}
                    noOfPages = {totalNoOfPages} showPage = {this.currentPage} prevPage={this.previousPage} nextPage = {this.nextPage}/>
            </div>
        )
    }
}

export default Wrapper;