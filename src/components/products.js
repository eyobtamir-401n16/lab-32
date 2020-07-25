import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {Card, Button, CardMedia, Typography, CardActions, CardActionArea, CardContent } from "@material-ui/core";
import * as actions from '../store/storeAction.js'


function Product(props){
  let productItems = [];
  const {product, get, add, currentCategory} = props;
 
  useEffect(() => {
    get()
  },[get])

  for( let i = 0; i<product.length; i++){
    console.log('product', product, currentCategory)
    if(props.product[i].category === currentCategory.name)
      console.log('inside if', product)
  productItems.push(
    <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
    </CardContent>
  
  
  ) 
    
  }

    console.log('array', productItems)
  return (
    <div>
     {productItems}
    </div>
  )
}

const mapToStateProps = (state)=>{
  return {
    product:state.product.productList,
    currentCategory:state.category.currentCategory
  }
}

const mapToDispatchProps = (dispatch, getState) => {
  return {
    get: (data) => dispatch(actions.fetchProduct(data)),
    add: (data) => dispatch(actions.addProduct(data))

  }
}

export default connect(mapToStateProps,mapToDispatchProps)(Product);