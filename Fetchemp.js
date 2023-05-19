import axios from "axios"
import {useState } from "react"


export default function Fetchemp(){

    let [arr,setarr]=useState([])
    function ans(){
        return arr.map((emp)=>{
            return(
            <tr><td>{emp.first_name.concat(" ",emp.last_name)}</td>
            <td>{emp.email}</td>
            <td><img alt="" src={emp.avatar} width="50" height="50"/></td>
            </tr>
        )})
    }




       function handler(e){
            let promise=axios.get("https://reqres.in/api/users?page=2")
                promise.then((res)=>{
                
                    setarr(res.data.data)
                   
                })
                
            }


    return <div style={{float:"left",width:"fit-content",borderStyle:"groove", borderWidth:"2px",borderColor:"gray",padding:"5px",margin:"8px",backgroundColor:"bisque"}}>
        <input type="button" value="Fetchdata" onClick={handler}/>
                    <table border="1">

                <thead>
                    <tr><td>Name</td><td>Email</td><td>Image</td></tr>
                </thead>
                <tbody>
                        {ans()}    

                </tbody>
            </table> 
        </div>
} 