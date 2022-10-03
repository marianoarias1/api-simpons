import axios from "axios";
import { useEffect, useState } from "react";



 export const useAxios=(character)=>{
    const [data, setData]=useState('')
      useEffect(()=>{
        const getCharacter= async ()=>{
            if(!character){
                return
            }else{
                let URL=`https://thesimpsonsquoteapi.glitch.me/quotes?character=${character}`
                console.log(URL)
                const {data}= await axios.get(URL, { crossDomain: true })
                setData(...data)
            }

          };
        getCharacter()
      },[character])

      return {data}
      
 }

