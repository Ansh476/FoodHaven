import React, { useState } from 'react'
import Itemlist from './Itemlist';

const Restocategory = ({data , showitems , setshowitems}) => { //showitmes is either true or false 
    console.log(data);
    // the below commented code is for uncontrolled component and the one in use is for controlled component where resto category is controlled by restomenu
    // const [showitem, setShowitem] = useState(false); 
    // const HandleClick = () => {
    //     setShowitems(!showitem);
    // };
    const handleClick = () => {
        setshowitems();
    };

  return (
    <div className='parentacc'>
        {/*header  */}
        <div className='headeracc'>
            <div className='inheader' onClick={handleClick}>
                <span>{data.title}  ({data.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showitems && <Itemlist items={data.itemCards}/>} 
            {/* if show items is true then only render itemlist */}
        </div>
    </div>
  );
};   
export default Restocategory;