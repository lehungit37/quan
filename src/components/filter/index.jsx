import React from 'react'
import './style.css'

const Filter = (props) => {
  const {categoriesList} = props
 
  return (
    <div className = "filter">
      <p>Filter</p>
      <div className="form_group">
        <div className="form_item">
          <span>Name</span>
          <input placeholder = "item's name ..." type="text" name ="name"/>
        </div>
        <div className="form_item">
          <span>Categories</span>
         <select>
           {categoriesList?.map((item) => {
             return <option key ={item.id} >{item.name}</option>
           })}
         </select>
        </div>
        <div className="form_item">
          <span>Min Prices</span>
          <input placeholder ="From" type="text" name ="name"/>
        </div>
        <div className="form_item">
          <span>Max Price</span>
             
          <input placeholder = "To" type="text" name ="name"/>
        </div>
      </div>
    </div>
  )
}

export default Filter