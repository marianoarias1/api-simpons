import styled from "styled-components";


export const CardStyledBack=styled.div`
    width:  45rem;
    height: 40rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    backdrop-filter: blur(4px);
    box-shadow: 0px 0px 40px 8px rgba(0,0,0,0.75);

    @media (max-width: 320px) {
        width: 30rem;
        height: 25rem;
    }
`

export const InputContainer=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchCharacter=styled.input`
    width: 10rem;
    height: 1.7rem;
    text-align: center;
    border: none;
    border-radius: 20px;
`

export const SubmitSearch=styled.button`
    width: 6rem;
    height: 1.7rem;
    text-align: center;
    border-radius: 20px;
    border: none;
    margin-left: 10px;
    background-color: #ffd920;
    color: #2E2E2E;
    font-weight: 600;
    border: 1px solid #2E2E2E;
    :active{
        transform: scale(0.9);
        background-color: #dbc038;
    }
`

export const CardStyled=styled.div`
    width:  25rem;
    height: 30rem;
    background-color: #2E2E2E;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    @media (max-width: 320px) {
        width: 17rem;
        height: 20rem;
    }

    @media (min-width: 389px) {
        width: 23rem;
        height:30rem;
    }
`

export const NoSelectedCharacterContainer=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NoSelectedCharacter=styled.h2`
    color: white;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.5rem;
    text-align: center;
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
    object-fit: contain;
    width: 17rem;
    height: 17rem;

    @media (max-width: 320px) {
        width: 11rem;
        height: 11rem;
    }
`

export const DescContainer=styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CharacterName=styled.h3`
    color: white;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.3rem;
`

export const ItemDesc=styled.span`
    color: white;
    text-align: center;
    font-family: 'Varela Round', sans-serif;
`