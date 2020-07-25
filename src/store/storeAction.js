import axios from 'axios';

export const fetchCategory = () => async dispatch =>{
let results =  await axios.get('https://api-js401.herokuapp.com/api/v1/categories')
              dispatch(getCategory(results.data.results))
    
}

const getCategory = (payload) => {
  return {
    type: 'GET_CATEGORY',
    payload: payload,
  }
}

export const changeCategory = (payload) => {
  return{
    type: 'CHANGE_CATEGORY',
    payload:payload,
  }
}

export const addCategory = (payload) => {
  return {
    type: 'ADD_CATEGORY',
    payload:payload
  }
}


export const fetchProduct = () => async dispatch => {
  let results = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
              dispatch(getProducts(results.data.results))
}

const getProducts = (payload) =>{
  return {
    type: 'GET_PRODUCT',
    payload:payload,
  }
}

export const addProduct = (payload) => {
  return {
    type: 'ADD_PRODUCT',
    payload:payload
  }
}