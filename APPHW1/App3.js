import React from "react"
import Trial from "./Trial"
import { func } from "prop-types";
import Trial2 from "./Trial2";
import Upper from "./Upper"
import Square from "./Squarec";
import Currency from "./Cuurency";
import Grad from "./Grad"





export  default function App3(){
 
    
    let arr=[85,98,33]
    function hi(){
        return "executed"
    }


    return(
        <div>
        {/* <Trial string={"Gaurav"} array={arr} obj={{"Name":"Gaurav","Age":"23"}} fun={hi} flag={true}></Trial>
       <Trial2  number={12} string={"Gaurav"} array={arr} obj={{"Name":"Gaurav","Age":"23"}} fun={hi}></Trial2> */}
        {/* <Upper></Upper> 
         <hr></hr>
        <Square></Square> 
         <hr></hr>
        <Currency></Currency> */}
         <Grad></Grad>  




        </div>
    );
}