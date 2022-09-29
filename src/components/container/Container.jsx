import React from 'react'
import { CardContainer } from '../cardContainer/CardContainer'
import { ContainerStyled, Image } from './ContainerStyels'

export const Container = () => {
  return (
    <ContainerStyled>
        <Image src='https://www.xtrafondos.com/descargar.php?id=3462&resolucion=2560x1440'></Image>
        <CardContainer></CardContainer>
    </ContainerStyled>
  )
}
