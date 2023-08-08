import { FetchUserList , RemvoeUser } from "../Redux/Action";
import { connect } from "react-redux";
import { useEffect } from "react";
import {Link} from 'react-router-dom';
import { toast } from "react-toastify";

const Userlist = (props) => {
    useEffect (() => {
        
    props.loaduser();

    } , [])

  const getDelete=(id)=>{
    if(window.confirm('Do you want to remove?')) {
     props.removeuser(id);
     props.loaduser();
     toast.success('User Removed Successfully')
    }
  }  
    return ( 
        props.user.loading?<div><h2>Loading...</h2></div>:
        props.user.errmessage?<div><h2>{props.user.errmessage}</h2></div>:
        
        <div>
<div className="card">
<div className="card-header">
<Link to={'/user/add'} className="btn btn-success">Add User +</Link>
</div>
<div className="card-body">
<table className="table table-dark table-striped">
    <thead >
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>E-mail</td>
            <td>Phone</td>
            <td>Action</td> 
        </tr>
    </thead>
    <tbody>
        {props.user.userlist && props.user.userlist.map(item=>
            <tr key={item.id}> 
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
<td><Link to={'/user/edit/'+item.id} className="btn btn-primary mx-3">Edit</Link>
<button  onClick={()=>getDelete(item.id)} className="btn btn-danger">Delete</button>
</td>
            </tr>)}
    </tbody>
</table>
</div>
</div>
        </div>
     );
}
 
const mapState=(state) =>{
//user from store
    return {
        user:state.user

    }
}
const mapDispatch=(dispatch) =>{
    //userlist from action
        return {
loaduser:() => dispatch(FetchUserList()),
removeuser:(id) => dispatch(RemvoeUser(id)),
        }
    }
export default connect(mapState,mapDispatch) (Userlist);