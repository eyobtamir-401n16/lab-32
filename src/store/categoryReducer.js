const initState = {
  categoryList: [],
  currentCategory: '' 
};

const reducer = (state = initState, action) =>{

  let newState = { ... state }

    switch(action.type){
   
      case 'GET_CATEGORY':
        newState.categoryList = action.payload

    }
  return newState;
}


export default reducer;