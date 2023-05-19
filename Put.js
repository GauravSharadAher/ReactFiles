import axios from "axios"
import {useState} from "react"
export default function Put()
{

    let name=""
    let job=""
    let [output, setoutput]=useState("")
    function f1(){
        let obj={name:name, job:job}
        console.log(obj)
        let promise=axios.put("https://reqres.in/api/users/2", obj)
        promise.then((res)=>{
             setoutput(res.data)
        })
    }



    return <div>
        Name :<input type="text" onBlur={(e)=>{name=e.target.value}}/>
        Job :<input type="text" onBlur={(e)=>{job=e.target.value}}/>
        <input type="button"  value=" CLick here" onClick={f1}/>
        <p>{JSON.stringify(output)}</p>
    </div>
}