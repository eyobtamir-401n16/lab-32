const initState = {
  categoryList: [],
  currentCategory: '' 
};

const reducer = (state = initState, action) =>{

  let newState = { ...state }

    switch(action.type){
   
      case 'GET_CATEGORY':
        newState.categoryList = action.payload
          break;
          
      case 'ADD_CATEGORY':
        newState.categoryList.push(action.payload)
          break;

      case 'CHANGE_CATEGORY':
        newState.currentCategory = action.payload
          break;
      default:
        break;

    }
  return newState;
}


export default reducer;