import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {EditUser , FetchUserOgj } from "../Redux/Action";

const Updateuser = () => {
    const [id,idchange] = useState (0);
    const [name,namechange] = useState ('');
    const [email,emailchange] = useState ('');
    const [phone,phonechange] = useState ('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {code}=useParams();
    const userobj=useSelector((state)=>state.user.userobj)
    
    const savedata =(e)=>{
        e.preventDefault();
        const userobj={id,name,email,phone}
         dispatch(EditUser(userobj,id))
         navigate('/users')
        //test the userobj
    console.log(userobj)
    }

    useEffect(() => {   
        dispatch(FetchUserOgj(code))
        },[])
     
        useEffect(() => {  
        if(userobj){
            idchange(userobj.id);
            namechange(userobj.name);
            emailchange(userobj.email);
            phonechange(userobj.phone);
        }
            },[userobj])

        return ( 
            <div>
                <form onSubmit={savedata}>
                <div className="card">
                    <div className="card-header">
    <h2>Add User</h2>
                    </div>
                    <div className="card-body">
    <div class="row">
        <div className='col-lg-12'>
            <div className='form-group'>
                <label className='py-1'>Id</label>
                <input value={id || ''} disabled='disabled' className='form-control'></input>
            </div>
        </div>
        <div className='col-lg-12'>
            <div className='form-group'>
                <label className='py-1'>Name</label>
                <input value={name || ''} onChange={e=>namechange(e.target.value)} className='form-control'></input>
            </div>
        </div>
        <div className='col-lg-12'>
            <div className='form-group'>
                <label className='py-1'>Email</label>
                <input value={email || ''} onChange={e=>emailchange(e.target.value)}  className='form-control'></input>
            </div>
        </div>
        <div className='col-lg-12'>
            <div className='form-group'>
                <label className='py-1'>Phone</label>
                <input value={phone || ''} onChange={e=>phonechange(e.target.value)}  className='form-control'></input>
            </div>
        </div>
    </div>
                    </div>
                    <div className="card-footer">
    <button className="btn btn-primary mx-3" type="submit">Edit</button>
    <Link className="btn btn-info" to={'/users'}>Back</Link>
                        </div>
                </div>
                </form>
            </div>
         );
}
 
export default Updateuser;