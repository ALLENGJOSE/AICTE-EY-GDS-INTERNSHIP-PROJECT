import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContent'
const FoodDisplay = ({category}) => {

const{food_list}=useContext(StoreContext)


  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
            return 
        }
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
