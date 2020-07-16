import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from './userTypes'
import axios from 'axios'


export const  fetchUsersRequest = () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const  fetchUsersSuccess = (users) =>{
   return {
    type:FETCH_USERS_SUCCESS,
    payload:users
   }
}

export const  fetchUsersFailure = (error) =>{
    return {
     type:FETCH_USERS_FAILURE,
     payload:error
    }
 }

  //async action creators, return a fn  XXXXXXX an action object
 export const fetchUsers = () => {
    return function (dispatch) {
      dispatch(fetchUsersRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }