import axios from "axios"
import { Component } from "react";
export default class Shoppingcart extends Component {


    constructor() {
        super()
        this.state = { arr: [], msg: "", hide1: false, totalcost: 0, hide2: false, hide3:false,usercart: [], finalcart: [],ind:-1 }
        this.products = []
        this.index = -1
        this.quantity = 0
        this.total = 0
        this.cart = []
        
    }
    componentDidMount() {
        let promise = axios.get("./shopstock.json")
        promise.then((res) => {
            let arr = res.data
            this.products = res.data
            let temp = arr.map((ele, index) => {
                return <option value={index}>{ele.item_name}</option>
            })
            this.setState({ arr: temp })
        })
    }
    display = (e) => {
        this.index = e.target.value
        this.setState({msg: " Item name :" + this.products[this.index].item_name +"    "   +  " Unit Cost: " + this.products[this.index].unit_cost })
        this.setState({ hide1: true })
        this.setState({ hide2: true })

    }
    quantity1 = (e) => {
        if(this.quantity<0){
            alert("Please Enter right Quantity")
        }else{
      //  console.log(this.index)
        this.total = this.products[this.index].unit_cost * this.quantity
        this.setState({ totalcost: this.total })
    }
}
    carts = () => {
        this.setState({hide3:true})
        let pobj;
        if(this.quantity<0){
            alert("Please Enter right Quantity")
        }else{
         pobj = {
            p_id: this.products[this.index].id,
            Item_Name: this.products[this.index].item_name,
            Quantity: this.quantity,
            p_cost: this.products[this.index].unit_cost,
            Subtotal: this.products[this.index].unit_cost * this.quantity
        }
    }
        this.cart.push(pobj)
        
        // this.state.usercart.push(this.cart)
        this.setState({ usercart: this.cart })
      //  console.log("show cart", this.state.usercart)
        // console.log("pobj",pobj)
        // console.log("cart",this.cart)
        
    }
    remove= (e,index) => {  this.state.usercart.splice(index, 1); this.showcart() }
    showcart = () => {
        if(this.quantity<0){
            alert("Please Enter Right Quantity")
        }else{
        let final = this.state.usercart.map((e, index) => {
            return <tr>
                <td>{index + 1}</td>
                <td>{e.p_id}</td>
                <td>{e.Item_Name}</td>
                <td>{e.p_cost}</td>
                <td>{e.Quantity}</td>
                <td>{e.Subtotal}</td>
                <td ><button class="btn-close" aria-label="Close"onClick={this.remove}></button></td>
            </tr>
        })
        this.setState({ finalcart: final })
    }
    }

    
total1=()=>{
    let sum=0
    for(let x of this.state.usercart){
        console.log(x)
        sum += (x.p_cost*x.Quantity)
    }
    console.log(sum)
    return sum
}
    render() {
        return <div>
            <pre>Select Item :</pre><select class="form-select form-select-sm" aria-label=".form-select-sm example"  style={{width:"fit-content"}}  onChange={this.display}>
               <option key={-1}>Select</option>
                {this.state.arr}
            </select>

            <pre>{this.state.msg}</pre>
            {this.state.hide1 && <p>Enter Quantity :<input type="number"  onBlur={(e) => { return this.quantity = e.target.value }}></input></p>}
            {this.state.hide2 && <><button  class="btn btn-outline-success" onClick={this.quantity1}>Get totalcost</button> <button  class="btn btn-outline-success" onClick={this.carts} > Add to cart</button></>}

            {this.state.hide2 && <p>Total cost for items :{this.state.totalcost}</p>}
            {this.state.hide3 && <><button  class="btn btn-outline-success" onClick={this.showcart}>Show Cart</button>
                <div><table border="1" class="table" ><thead class="table-dark">
                    <tr>
                        <td>SrNo</td>
                        <td>Product Id</td>
                        <td>Product Name</td>
                        <td>Product Cost</td>
                        <td>Product Quantity</td>
                        <td>Total cost</td>
                        <td>Remove Item</td>
                    </tr>
                </thead>
                    <tbody>
                        {this.state.finalcart}
                        <tr ><td colspan="5">SubTotal</td><td>{this.total1()}</td></tr>
                    </tbody>
                </table></div></>



            }
        </div>
    }
}