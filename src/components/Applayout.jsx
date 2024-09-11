import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import UserContext from '../utils/UserContext'
import { Provider } from 'react-redux'
import appstore from '../utils/appstore'

const Applayout = () => {
  const [username,setusername]=useState();
  useEffect(()=>{
    //Api call is made to fetch data
    const data = {
      name: "Messi"
    }
    setusername(data.name)
  },[]);
  return (
    <>
    <Provider store={appstore}>
      <UserContext.Provider value={{loggedinusername : username , setusername}}> 
        {/* <UserContext.Provider value={{loggedinusername : "Ansh"}}>  */}
          <Header/>
        {/* </UserContext.Provider> */}
        <Outlet/>
      </UserContext.Provider>
    </Provider>
    </>
  )
}

export default Applayout
