import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/storeAction.js'

function Category (props){
  const { getCategory } = props;

  useEffect(() => {
    getCategory()
  },[getCategory])

  return(
    <div>

    </div>
  )
}

const mapToStateProps = (state) => {
  return {
  category: state.category.categoryList,
  }
}
const mapToDispatchProps = (dispatch, getState) => ({
  getCategory: (data) => dispatch(actions.fetchCategory(data))
})



export default connect(mapToStateProps,mapToDispatchProps)(Category);