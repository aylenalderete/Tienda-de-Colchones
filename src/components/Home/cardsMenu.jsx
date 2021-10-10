import React from 'react'
import colchon1 from "../../assets/colchon1.png"
import "../../styles/Home/cardsmenu.scss"


function CardsMenu() {
    return (
        <section className="section-container">

            <div className="card-column">
                <div className="container-column-img">
                    <img alt='card1' className="column-img" src={colchon1} />
                </div>
                <div className="container-column-text">
                    <p>La mejor tecnología: Colchones Fisher</p>
                    <button className="button">Ver más</button>
                </div>
            </div>
            <div className="card-column">
                <div className="container-column-img">
                    <img alt='card2' className="column-img" src={colchon1} />
                </div>
                <div className="container-column-text">
                    <p>¿Te gustaría vender nuestros productos?</p>
                    <button className="button">Ver más</button>
                </div>
            </div>

        </section>
    )
}

export default CardsMenu
