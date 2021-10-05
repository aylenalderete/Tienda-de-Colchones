import React from 'react'
import { useEffect, useState } from "react"
import { getProduct } from "../../database/product";
import Layout from '../GeneralComponents/layout'
import Colchon from '../../assets/colchon1.png'
import "../../styles/product.scss";
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom"

const productInitialState = {
    nombre: '',
    precio: 0,
    descripcion: '',
    imagen: '',
    medida: [],
    peso: [],
    sensacion: [],
}

function Product() {
    const [productData, setproductData] = useState(productInitialState)
    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {doc_id} = useParams()

    useEffect(() => {
        obtenerDatos()
    }, [])

    const handleInputChange = (e) => {
        setproductData({...productData, [e.target.name] : e.target.value})
    }

    const obtenerDatos = async() => {
        const productSelected = await getProduct(doc_id)
        setproduct(productSelected)
        setLoading(false)
    }

    const handleClick = () => {
        window.location.assign(`http://api.whatsapp.com/send?phone=+5491170389483&text=Hola!%20Estoy%20interesado/a%20en%20comprar%20el%20siguiente%20producto:%20${product.nombre}%20de%20${product.variants[0].size},%20precio%20$${product.variants[0].price},%20sensacion%20${product.sensacion},%20peso%20max.%20${product.peso}.%20Muchas%20gracias.`);
    }

    if(loading){
        return (
            <h3>cargando...</h3>
        )
    }


    return (
        <Layout>
            <div className="product-container">
                <div className="img-container">
                    <img className="img-product" src={product.images[0]}></img>
                </div>
                <div>
                    {product.images.map((el) => {
                        <img src={el}/>
                    })}
                </div>
                <div className="info-container">
                    <h1>{product.nombre}</h1>
                    <p>${product.variants[0].price}</p>
                    <p>{product.descripcion}</p>
                    <p>Elegir la medida:</p>
                    <select name='medida' onChange={handleInputChange}>
                        <option value='1 plaza'>1 plaza</option>
                        <option value='1 plaza y media'>1 plaza y media</option>
                        <option value='2 plazas'>2 plazas</option>
                        <option value='2 plazas y media'>2 plazas y media</option>
                    </select>
                    <p>Elegir el peso:</p>
                    <select name='peso' onChange={handleInputChange}>
                        <option value='40kg'>40kg</option>
                        <option value='50kg'>50kg</option>
                        <option value='60kg'>60kg</option>
                        <option value='75kg'>75kg</option>
                        <option value='90kg'>90kg</option>
                        <option value='100kg'>100kg</option>
                        <option value='110kg'>110kg</option>
                        <option value='120kg'>120kg</option>
                        <option value='130kg'>130kg</option>
                    </select>
                    <p>Elegir la sensación:</p>
                    <select name='sensacion' onChange={handleInputChange}>
                        <option value='goma espuma'>Goma espuma</option>
                        <option value='alta densidad'>Alta densidad</option>
                        <option value='resorte'>Resorte</option>
                    </select>
                        <button className="button" onClick={handleClick}>Comprar</button>
                </div>
            </div>
        </Layout>
    )
}

export default Product
