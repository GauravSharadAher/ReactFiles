import axios from "axios"
import {useState} from "react"
import Show from "./Show"
export default function Id(){


    let[user,setu]=useState([])
    
    let id=0;
    function f1(){
         return user.map((name)=>{
            return <Show
                Name={name.first_name}
                Email ={name.email}
                Image ={name.avatar}>
            </Show>
         })
         
}



function handler(){
    
    let promise=axios.get(`https://reqres.in/api/users/${id}`)
        promise.then((res)=>{
            let obj=res.data.data
            user.push(obj)
            setu([...user])
             console.log(user)
    })
}

return <div>
    <input type="number" placeholder="Enter id" onBlur={(e)=>{id=e.target.value}}/>
    <input type="button" value="Click me" onClick={handler}/><br></br><br></br>
    {user!=null?f1():""}

</div>
}