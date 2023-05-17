
export default function trial(props){
    
    let name1=""
    let ans=props.name
     function string(){
        name1=name1.concat(ans)
        return name1
    }
   

    return <div> Name is {string()}</div>
}
