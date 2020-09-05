import React from 'react';
import  './Pagination.css';
//import classes from '*.module.css';
//import { MDBDataTable } from 'mdbreact';
// class Pagination extends Component{
     
//     render(){
//        return(
          
//         ) 
//     }
// }
let pagination = ({fromValue,presentCount,totalCount,noOfPages,showPage,prevPage,nextPage})=>{
  console.log(noOfPages);
  //let curPage = 0;
  if(presentCount>totalCount)
     presentCount=totalCount
  let totalNoOfPages = noOfPages.map(value=>{
     //curPage =value;
    return (
    <li key = {value} className ="page-item" onClick ={()=>showPage(value)}>{value}</li>
    )
  })
return(
  <React.Fragment>
    
    <div className ="contentAlign">    
            <div className ="results">Showing Results {fromValue+1} to {presentCount} of {totalCount}</div>       
            {/* <nav style={{'width': '100%','padding-left': '40%'}}> */}
            <div className = "page-list">
                <ul  className ="paginationAlignment">
                      <li className ="page-item" onClick ={prevPage}> Prev</li>
                          {totalNoOfPages}
                      <li className ="page-item" onClick ={()=>nextPage(noOfPages.length)}>Next</li>
                 </ul>
            </div>                
             {/* </nav> */}   
    </div>
     
  </React.Fragment>
  
)
}
export default pagination;
