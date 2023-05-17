import React from "react"
import '../App.css'
import Add from "./Add"
import Factorial from "./Factorial";
import Props from "./Props"




export default function App2(){

    return(
        <div>
           <Add num1={5} num2={10}></Add> 
           <Add num1={6} num2={10}></Add> 
           <Add num1={7} num2={10}></Add> 
           <Factorial number={5}></Factorial>
           <Factorial number={6}></Factorial>
           <Props name={"Gaurav"}></Props>

        </div>

    );
}