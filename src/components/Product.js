import React from 'react'
import Item from "./Item"

export default function Product(props) {
   
  return (
    props.Products.length > 0 ?
    props.Products.map((item,i)=>{
        return <Item item={item} key={i} add={props.add} index={i} minus={props.minus} remove={props.remove}/>
    })
    : <h1> No Item in your Cart. </h1> 
   
  )
}
