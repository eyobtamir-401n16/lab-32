import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core'
import * as actions from '../store/storeAction.js'

function Category (props){
  const { getCategory, category, currentCategory} = props;
  let selectedCategory = [];

  useEffect(() => {
    getCategory()
  },[getCategory])


  for(let i = 0; i < category.length; i++ ){
    console.log('what',category[i].name )
        selectedCategory.push(<Button key={i} onClick={() => {
            currentCategory(category[i].name)
        }}
        variant="contained" color="primary">
        {category[i].name}
      </Button>)
  
}
    return(
      <div>
        {selectedCategory}
      </div>
    )
    }
const mapToStateProps = (state) => {
  return { 
  category: state.category.categoryList,
  currentCategory: state.category.currentCategory,
  }
}
const mapToDispatchProps = (dispatch, getState) => ({
  getCategory: (data) => dispatch(actions.fetchCategory(data)),
  currentCategory:(data) => dispatch(actions.changeCategory(data))
})



export default connect(mapToStateProps,mapToDispatchProps)(Category);