import React, { Component } from "react"

export default class Factorial extends Component{
        constructor(props){
            super()
            this.num=props.number
        }

        fact(){
            let fact=1
            for(let i=1;i<=this.num;i++){
                fact=fact*i
            }
            console.log(fact)
            return fact
        }


    
    render(){
        return <div><p>Factorial of {this.num} is {this.fact()}</p></div>

    }
}





