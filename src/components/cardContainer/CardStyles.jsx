import styled from "styled-components";


export const CardStyledBack=styled.div`
    width:  45rem;
    height: 40rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    box-shadow: 0px 0px 40px 8px rgba(0,0,0,0.75);
`

export const CardStyled=styled.div`
    width:  25rem;
    height: 30rem;
    background-color: #2E2E2E;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
`

export const CardIMGContainer=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CardIMG=styled.img`
    margin-top: 20px;
    object-fit: cover;
    width: 17rem;
    height: 17rem;
`

export const DescContainer=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`

export const CharacterName=styled.h3`
    color: white;
`

export const ItemDesc=styled.span`
    color: white;
`