const initState = {

  productList: [],
}


const reducer = (state = initState, action) => {

  let newState = { ...state }

    switch (action.type){

      case 'GET_PRODUCT':
        newState.productList.push(action.payload)
        break;

      case 'ADD_PRODUCT':
        newState.productList = action.payload
        break;
      default:
        break;

    }

    return newState;
}

export default reducer;