import React from 'react'
import colchon1 from "../../assets/colchon1.png"
import "../../styles/Home/cardsmenu.scss"
import Card from "../GeneralComponents/card";
import { Grid } from '../GeneralComponents/layout'
import { useHistory } from "react-router-dom"


function CardsMenu() {
    const history = useHistory()

    return (
        <section className="section-container">
        <Grid height="17rem" width="20rem">
                <Card 
                    cardAction={() => history.push(`/productos`)}
                    img={colchon1}
                    imgStyle = {{width: '170px'}}
                    style={{width: '80%', display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: '10%', paddingBottom: '10%', color: 'rgb(92 92 92)'}}
                    title={'Conocé nuestros productos'}
                />
        </Grid>
        <Grid height="17rem" width="20rem">
                <Card 
                    cardAction={() => history.push(`/ContactoMayorista`)}
                    img={colchon1}
                    imgStyle = {{width: '170px'}}
                    style={{width: '80%', display:'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: '10%', paddingBottom: '10%', color: 'rgb(92 92 92)'}}
                    title={'¿Te gustaría vender por mayor?'}
                />
        </Grid>
        </section>
    )
}

export default CardsMenu
