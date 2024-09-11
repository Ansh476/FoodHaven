import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';
import useRestmenu from '../utils/useRestmenu';
import Restocategory from './Restocategory';


const RestoMenu = () => {

    const [showindex,setshowindex]=useState(null);

    const toggleaccordian = (index) =>{
      setshowindex(index===showindex ? null : index);
    };
    
    const {resid}=useParams();

    const resinfo = useRestmenu(resid);

    if(resinfo=== null) return <Shimmer/>;
    const { name,cuisines,costForTwoMessage} = resinfo?.cards?.[2]?.card?.card?.info || {};

    const {itemCards}= resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || {};

    console.log(resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []);
    
    const categories = resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]== 
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    console.log(categories);
    if (!itemCards) {
      // If itemCards is undefined, show a loading state
      return <Shimmer/>;
    }
    
    return (
      <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines && cuisines.length > 0 ? cuisines.join(", ") : ""} - {costForTwoMessage}</p>
        {/* <h2>Menu</h2>
        <ul>
          {itemCards.map(item =>
            <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
          )}
        </ul> */}

        {/* categories */}
        {categories.map((category,index)=>
          <Restocategory key={category?.card?.card?.title}
           data={category?.card?.card}
            showitems = {index==showindex && true }
            setshowitems = {()=>{toggleaccordian(index)}}/>
          )}
      </div>
    );
    
}


export default RestoMenu
