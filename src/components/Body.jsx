import React,{useContext, useEffect, useState} from 'react'
import Restocard,{withPromotedLabel} from './Restocard'
import reslist from "../utils/mockData"
import Shimmer from './Shimmer';
import { RESTO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Body = () => {
  const [listofresto,setlistofresto]=useState([]);
  const [filteredresto,setfilteredresto]=useState([]);
  const [searchText,setSearchText]=useState("")
  const [toprated,settoprated]=useState(false)

  const Promotedresto = withPromotedLabel(Restocard);

  // console.log("render")
  useEffect(()=>{
    fetchdata();
  },[])

  const fetchdata = async () => {
    const data = await fetch(RESTO_URL);
    const jsondata = await data.json();
    console.log(jsondata)
    setlistofresto(jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    setfilteredresto(jsondata?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  };
  // const fetchdata = async () => {
  //   try {
  //     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.121246&lng=72.88773139999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     const jsondata = await response.json();
      
  //     console.log(JSON.stringify(jsondata, null, 2)); // To inspect the JSON structure in detail
      
  //     // Correctly navigate to the list of restaurants
  //     const listOfRestaurants = jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
  //     if (listOfRestaurants) {
  //       setlistofresto(listOfRestaurants);
  //     } else {
  //       console.error("Could not find the list of restaurants.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // // conditional rendering
  // if(listofresto.length===0){
  //   return <Shimmer/>;
  // }
  const handletoprated = ()=>{
    if(toprated){
      setfilteredresto(listofresto);
    }
    else{
      setfilteredresto(listofresto.filter(
        (res)=> res.info.avgRating >= 4.5
      ));
    }
    settoprated(!toprated);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus==false) return <h1>Looks like your offline, kindly check your internet connection</h1>

  const {loggedinusername,setusername} = useContext(UserContext);

  return !listofresto || listofresto.length === 0 ? <Shimmer /> :(
    <>
    <div className='search'></div>
    <div className='upperfuncs'>

      <label htmlFor="search">Search:</label>
      <input type="text" className='searchText' id='search' value={searchText} onChange={(e)=>{
        setSearchText(e.target.value);        
      }}/>
      <button
      onClick={()=>{
        const filteredList = listofresto.filter(
          (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setfilteredresto(filteredList);
      }}>search</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
      onClick={handletoprated}>
        {toprated ? "Show All" : "Top rated"}
      </button>
      <div>
        <label htmlFor="usern">Username: </label>
        <input type="text" id='usern' value={loggedinusername} onChange={(e)=>setusername(e.target.value)}/>
      </div>
    </div>

    <div className='resto-container'>
      {
        // filteredresto.map((restuarent) => (
        //   <Restocard key={restuarent.info.id} resData={restuarent} />
        // ))
        filteredresto.map((restuarent) => (
          <Link key={restuarent.info.id} to={"/restuarents/"+ restuarent.info.id}>{restuarent.info.promoted ?<Promotedresto resData={restuarent}/>:<Restocard  resData={restuarent} />}</Link>
        ))
        // this is a bad practice to use index as a key in a map function it confuses react toidentify which properties belong to which mapped component
        // reslist.map((restuarent, index) => (
        //   <Restocard key={index} resData={restuarent} />
        // ))
      }
    </div>
    </>
  )
}

export default Body