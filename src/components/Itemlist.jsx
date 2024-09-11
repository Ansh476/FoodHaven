import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

const Itemlist = ({items}) => {

  const dispatch = useDispatch();
  const handleadditem = (item) =>{
    dispatch(addItem(item))
  }
  return (
    <div>
     {items.map(item=>
     <div key={item.card.info.id} className='pdi'>
        <div className='pdiin'>
            <div className='divitem'>
                <span> {item.card.info.name} -</span>
                <span> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
            </div>
            <p>{item.card.info.description}</p>
        </div>
        <div className='imgb'>
            <img src={CDN_URL+item.card.info.imageId} alt="" />
            <button onClick={()=>handleadditem(item)}>Add+</button>
        </div>
     </div>)}
    </div>
  )
}

export default Itemlist;