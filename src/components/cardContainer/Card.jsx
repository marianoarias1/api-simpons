import React, { useEffect, useState } from 'react'
import { CardIMG, CardIMGContainer, CardStyled, CardStyledBack, CharacterName, DescContainer, ItemDesc } from './CardStyles'
import axios from 'axios'

const URL='https://thesimpsonsquoteapi.glitch.me/quotes?character=homer'

export const Card = () => {
  const [data, setData]=useState(null)

  const getCharacter= async ()=>{
    const {data}= await axios.get(URL, { crossDomain: true })

    const object = data.reduce((acc, item) => {
      acc[item.character] = item
      return acc
    }, {})
    
    console.log(object)
    setData({
      character: object?.character,
      image:object?.image,
      quote: object?.quote,
    })

  };

  useEffect(()=>{
    getCharacter()
  },[])

  console.log(data)
  
  return (
    <CardStyledBack>
    <CardStyled>
        <CardIMGContainer>
            <CardIMG src={data?.image}/>
        </CardIMGContainer>
        <DescContainer>
                <CharacterName>{data?.character}</CharacterName>
                <ItemDesc>{data?.quote}</ItemDesc>
          </DescContainer>
    </CardStyled>
    </CardStyledBack>
  )
}
