import { useState , useEffect } from 'react';
import { MENU_URL } from './constants';
const useRestmenu=(resid)=>{
    const [resinfo, setresinfo]=useState(null);
    useEffect(()=>{
        fetchinfo();
    },[])
    const fetchinfo = async () => {
        try {
            const data = await fetch(MENU_URL + resid);
            const json = await data.json();
            console.log(json); // Check if data is correctly logged
            setresinfo(json.data);  // Ensure this updates state properly
        } catch (error) {
            console.error("Failed to fetch restaurant menu:", error);
        }
    };
    return resinfo;
}

export default useRestmenu;