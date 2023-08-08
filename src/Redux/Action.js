import {EDIT_USER, ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST, GET_USER_OBJ} from "./ActionType"
import axios from 'axios';
import { toast } from "react-toastify";

export const makeRequest=() =>{
    return{
         type:MAKE_REQUEST
    }
}
export const failRequest=(err) =>{
    return{
         type:FAIL_REQUEST,
         payload:err
    }
}
export const getUserList=(data) =>{
    return{
         type:GET_USER_LIST,
         payload:data
    }
}
export const addUser=() => {
  return{
    type:ADD_USER,
    
  }
}
export const editUser=() => {
  return{
    type:EDIT_USER,
    
  }
}
export const getUserObj=(data) =>{
  return{
       type:GET_USER_OBJ,
       payload:data
  }
}
export const deleteUser=() => {
  return{
    type:DELETE_USER,
    
  }
}
//GET THE DATA FROM API JSON SERVE AFTER 1 SECOND TO SHOW THE LOADING WORD
export const FetchUserList=()=>{
    return (dispatch) => {
      dispatch(makeRequest());
      setTimeout (() => {

        axios.get('http://localhost:8000/users').then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist))
          })
          .catch(err=> {
            dispatch(failRequest(err.message));
          })


      } , 1000) ;

    }
}

//add anew user at json
export const AddNewUser=(data)=>{
  return (dispatch) => {
    dispatch(makeRequest());
    setTimeout (() => {

      axios.post('http://localhost:8000/users' , data).then(res=>{
        dispatch(addUser());
        toast.success('User Added Successfully')

        })
        .catch(err=> {
          dispatch(failRequest(err.message));
        })


    } , 1000) ;

  }
}

//edit new user at json
export const EditUser=(data ,id)=>{
  return (dispatch) => {
    dispatch(makeRequest());
    setTimeout (() => {

      axios.put('http://localhost:8000/users/'+id , data).then(res=>{
        dispatch(editUser());
        toast.success('User Updated Successfully')

        })
        .catch(err=> {
          dispatch(failRequest(err.message));
        })


    } , 1000) ;

  }
}
//DELETETHE DATA FROM API JSON SERVE AFTER 1 SECOND TO SHOW THE LOADING WORD

export const RemvoeUser=(id)=>{
  return (dispatch) => {
    dispatch(makeRequest());
    setTimeout (() => {
      axios.delete('http://localhost:8000/users/'+id).then(res=>{
        dispatch(deleteUser())
        })
        .catch(err=> {
          dispatch(failRequest(err.message));
        })


    } , 1000) ;

  }
}

//get new user list after updated
export const FetchUserOgj=(id)=>{
  return (dispatch) => {
    dispatch(makeRequest());

      axios.get('http://localhost:8000/users/'+ id).then(res=>{
          const userlist=res.data;
          dispatch(getUserObj(userlist))
        })
        .catch(err=> {
          dispatch(failRequest(err.message));
        })

  }
}