import React from 'react'
import Itemlist from './Itemlist';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {

    const cartitems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();

    const handleclearcart = () => {
        dispatch(clearCart())
    }

  return (
    <div className='cartdiv'>
        <div className='cartdivone'>
            <h1>Cart</h1>
            <button onClick={handleclearcart}>Clear Cart</button>  
        </div>
        <div >
            {cartitems.length==0 && <h1>add items to cart</h1>}
            <Itemlist items={cartitems}/>
        </div>
    </div>
  )
}

export default Cart;