import axios from 'axios';

const serverUrl = 'http://frontend-candidate.dev.sdh.com.ua'; // remote server
const serverUrl2 = 'http://localhost:3002'; // local server

export const SET_USER_LIST = 'SET_USER_LIST';
export const SET_USER_DATA = 'SET_USER_DATA';

export function getUsersData() {
  return (dispatch) => {
    axios.get(`${serverUrl2}/v1/contact/`)
      .then(function (response) {
        // handle success
        dispatch({type: SET_USER_LIST, payload: response.data})
        console.log('actions getUsersData', response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
}

export function getSingleUserData(id) {
  return (dispatch) => {
    axios.get(`${serverUrl2}/v1/contact/${id}/`)
      .then(function (response) {
        // handle success
        dispatch({type: SET_USER_DATA, payload: response.data})
        console.log('actions getSingleUserData', response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
}

export function deleteUser(id) {
  return (dispatch) => {
    axios.delete(`${serverUrl2}/v1/contact/${id}/`)
      .then(function (response) {
        // handle success

        dispatch(getUsersData())
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
}

export function createUser(obj) {
  console.log('action', obj)
  return (dispatch) => {
    axios.post(`${serverUrl2}/v1/contact/`, obj)
      .then(function (response) {
        // handle success

        dispatch(getUsersData())
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
}