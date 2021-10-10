import React from 'react'
import { useEffect, useState } from "react"
import { getProduct } from "../../database/product";
import Layout from '../GeneralComponents/layout'
import Colchon from '../../assets/colchon1.png'
import "../../styles/product.scss";
import { useParams } from 'react-router';
import Slider from 'infinite-react-carousel';
import { useLocation } from "react-router";
import queryString from 'query-string';
import Loading from '../GeneralComponents/loading';

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
    const [priceActive, setpriceActive] = useState(0)
    const [loading, setLoading] = useState(true)
    const {doc_id} = useParams()
    const location = useLocation()
    const {search} = queryString.parse(location.search)
    console.log('productos', search)
    useEffect(() => {
        obtenerDatos()
    }, [])

    const handleInputChange = (e) => {
        // setproductData({...productData, [e.target.name] : e.target.value})
        setpriceActive(e.target.value)
        console.log(product)
    }

    const obtenerDatos = async() => {
        const productSelected = await getProduct(doc_id)
        setproduct(productSelected)
        setLoading(false)
    }

    const handleClick = () => {
        window.location.assign(`http://api.whatsapp.com/send?phone=+5491170389483&text=Hola!%20Estoy%20interesado/a%20en%20comprar%20el%20siguiente%20producto:%20${product.nombre}%20de%20${product.variants[priceActive].size},%20precio%20$${product.variants[priceActive].price},%20sensacion%20${product.sensacion},%20peso%20max.%20${product.peso}.%20Muchas%20gracias.`);
    }




    return (
        <Layout>
            {
                loading ? <Loading />
                :
            <div className="product-container">
                <div className="img-container">
                    <section className='slider'>
                        <Slider className='slider__content'>
                            {product.images.map((el) => (
                                <div className='slider__content--item'>
                                    <img style={{width:'95%'}} src={el} alt='Foto del producto' />
                                </div>
                            ))}
                        </Slider>
                    </section>
                </div>
                <div className="info-container">
                    <h1 style={{marginBottom:'1%', fontSize: '22px'}}>{product.nombre}</h1>
                    <h2 style={{marginTop:'3%', color: '#418fde'}}>${ product.variants[priceActive].price }</h2>
                    <p style={{marginBottom:'1%'}}>Descripción:</p>
                    <p style={{marginTop:'1%', marginBottom:'1%'}}>{product.descripcion}.</p>
                    <p>Este producto soporta {product.peso} y su tipo de sensación es de {product.sensacion}.</p>
                    <p>Elegir la medida:</p>
                        <select className="info-container_select" name='medida' onChange={handleInputChange}>
                        {product.variants.map((el, i) => (
                            <option value={i}>{el.size}</option>
                        ))}
                        </select>
                    <button className="button" onClick={handleClick}>Comprar</button>
                </div>
            </div>
            }
        </Layout>
    )
}

export default Product
