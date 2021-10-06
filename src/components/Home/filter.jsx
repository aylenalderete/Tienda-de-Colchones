import React, { useState } from 'react'
import '../../styles/Home/filter.scss'

function Filter() {
    const [filterActive, setfilterActive] = useState([])
    
    const medidaElegida = (e) => {
        let filtros = [...filterActive]
        if (filtros.includes(e.target.id)) {
            let index = filtros.indexOf(e.target.id);
            filtros.splice(index, 1);
        } else {
            filtros.push(e.target.id)
        }
        setfilterActive(filtros)
        console.log(filtros)
    }

    const filtrosFinales = (e) => {
        console.log(filterActive)
    }

    const buttonsSizes = [
        {label:'1 plaza', value: "1 plaza"},
        {label:'1 plaza y media', value: "1½ plaza"},
        {label:'2 plazas', value: "2 plazas"},
        {label:'2 plazas y media', value: "2½ plazas"},
    ]

    const buttonsWeight = [
        {label:'40kg', value: "40kg"},
        {label:'50kg', value: "50kg"},
        {label:'60kg', value: "60kg"},
        {label:'75kg', value: "75kg"},
        {label:'90kg', value: "90kg"},
        {label:'100kg', value: "100kg"},
        {label:'110kg', value: "110kg"},
        {label:'120kg', value: "120kg"},
        {label:'130kg', value: "130kg"},
    ]

    const buttonsSensation = [
        {label:'Goma espuma', value: "Goma espuma"},
        {label:'Alta densidad', value: "Alta densidad"},
        {label:'Resorte', value: "Resorte"},
    ]

    return (
        <div className="filter__container">
            <div className="filter__subcontainer-first">
                <h1 className="filter__container-title">3 pasos para encontrar tu colchón ideal</h1>
            </div>    
            <div className="filter__subcontainer">
                <div className="filter__column">
                    <div className="filter__column-title">
                        <p className="filter__container-p">1- ¿QUÉ MEDIDA ESTÁS BUSCANDO?</p>
                    </div>
                    <div className="buttons-container-filter">
                    {buttonsSizes.map((buttonProps) => (
                        <button onClick={medidaElegida} id={buttonProps.value} className={`${filterActive.includes(buttonProps.value) && 'active'} filter-button`}>{buttonProps.label}</button>
                    ))}
                    </div>
                </div>
                <div className="filter__column">
                    <div className="filter__column-title">
                        <p className="filter__container-p">2- ¿QUÉ PESO TIENE QUE SOPORTAR TU COLCHÓN?</p>
                    </div>
                    <div className="buttons-container-filter">
                    {buttonsWeight.map((buttonProps) => (
                        <button onClick={medidaElegida} id={buttonProps.value} className={`${filterActive.includes(buttonProps.value) && 'active'} filter-button`}>{buttonProps.label}</button>
                    ))}
                    </div>
                </div>
                <div className="filter__column">
                    <div className="filter__column-title">
                        <p className="filter__container-p">3- ¿QUÉ SENSACIÓN PREFERÍS?</p>
                    </div>
                    <div className="buttons-container-filter">
                    {buttonsSensation.map((buttonProps) => (
                        <button onClick={medidaElegida} id={buttonProps.value} className={`${filterActive.includes(buttonProps.value) && 'active'} filter-button`}>{buttonProps.label}</button>
                    ))}
                    </div>
                </div>
                <div className="filter__column-button">
                    <button onClick={filtrosFinales} className="button-to_search">Buscar</button>
                </div>
            </div>  
        </div>
    )
}

export default Filter
