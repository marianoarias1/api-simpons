import React, { useEffect, useRef, useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { CardIMG, CardIMGContainer, CardStyled, CardStyledBack, CharacterName, DescContainer, InputContainer, ItemDesc, NoSelectedCharacter, NoSelectedCharacterContainer, SearchCharacter, SubmitSearch } from './CardStyles'



export const Card = () => {
  const [character, setCharacter]=useState('')

  const characterSelected= useRef()

  const handle=()=>{
    const character= characterSelected.current.value
    console.log(character)
    characterSelected.current.value=''
    return setCharacter(character)
  }
  const {data}=useAxios(character)
  
  return (
    <CardStyledBack>
      <InputContainer>
        <SearchCharacter placeholder='Who are you looking for?' ref={characterSelected}></SearchCharacter>
          <SubmitSearch type='submit' onClick={handle}>Search</SubmitSearch>
      </InputContainer>

      {
        data ?
        
        <CardStyled>
        <CardIMGContainer>
            <CardIMG src={data?.image}/>
        </CardIMGContainer>
        <DescContainer>
                <CharacterName>{data?.character}</CharacterName>
                <ItemDesc>{data?.quote}</ItemDesc>
          </DescContainer>
      </CardStyled>
      :
      <CardStyled>
        <NoSelectedCharacterContainer>
          <NoSelectedCharacter>Write a Character, please</NoSelectedCharacter>
        </NoSelectedCharacterContainer>
      </CardStyled>
      }

    </CardStyledBack>
  )
}
