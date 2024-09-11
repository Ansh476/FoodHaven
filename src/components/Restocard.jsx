import React from 'react'
import { CDN_URL } from '../utils/constants';

const Restocard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  
  return (
    <div className='restocard'>
      <img src={CDN_URL + cloudinaryImageId} alt="dish" className='image' />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} stars</p>
      <p>{deliveryTime} minutes</p>
    </div>
  );
}
// second way
// const Restocard = (props) => {
//   return (
//     <div className='restocard'>
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgC2KtS9iPmsKLIlHbRLG0zMdTz7NhvK96ag&s" alt="dish" className='image'/>
//         <h3>{props.resname}</h3>
//         <p>{props.cusine}</p>
//         <p>{props.rating}</p>
//         <p>{props.time}</p>
//     </div>
//   )
// }

// higher order components 

export const withPromotedLabel = (RestoCard) =>{
  return(props)=>{
    return(
      <>
      <label htmlFor="" className='promolabel'>Promoted</label>
      <RestoCard {...props}/>
      </>
    )
  }
}

export default Restocard;