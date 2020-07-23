import axios from 'axios';

export const fetchCategory = () => async dispatch =>{

let results =  await axios.get('https://api-js401.herokuapp.com/api/v1/categories')
              dispatch(getCategory(results.data))
    
}

const getCategory = (payload) => {
  return {
    type: 'GET_CATEGORY',
    payload: payload,
  }
}