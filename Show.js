export default function Show({Name,Email,Image}){

    return<div style={{float:"left",width:"fit-content",borderStyle:"groove", borderWidth:"2px",borderColor:"gray",padding:"5px",margin:"8px",backgroundColor:"bisque"}}>
        <p>Name :{Name}</p>
        <p>Email :{Email}</p>
        <p>Image :</p>
        <p><img alt="" src={Image} height="150" width="150"/></p>
    </div>
}