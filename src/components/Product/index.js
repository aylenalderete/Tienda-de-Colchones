import React from 'react'
import { useState } from "react"
import { getProduct } from "../../database/product";
import Layout from '../GeneralComponents/layout'
import { useParams } from 'react-router';
import Slider from 'infinite-react-carousel';
import Loading from '../GeneralComponents/loading';
import { useEffectAsync } from '../../utils/hooks';
import "../../styles/product.scss";


function Product() {
    const [product, setproduct] = useState([])
    const [priceActive, setpriceActive] = useState(0)
    const [loading, setLoading] = useState(true)
    const {doc_id} = useParams()
    
    useEffectAsync(async () => {
        const productSelected = await getProduct(doc_id)
        setproduct(productSelected)
        setLoading(false)
    }, [])

    const handleInputChange = (e) => {
        setpriceActive(e.target.value)
    }


    const handleClick = () => {
        window.location.assign(`http://api.whatsapp.com/send?phone=+5491165183514&text=Hola!%20Estoy%20interesado/a%20en%20comprar%20el%20siguiente%20producto:%20${product.nombre}%20de%20${product.variants[priceActive].size},%20precio%20$${product.variants[priceActive].price},%20sensacion%20${product.sensacion},%20peso%20max.%20${product.peso}.%20Muchas%20gracias.`);
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
                            {product.images.map((el, i) => (
                                <div key={i} className='slider__content--item'>
                                    <img style={{width:'95%'}} src={el} alt='Foto del producto' />
                                </div>
                            ))}
                        </Slider>
                    </section>
                </div>
                <div className="info-container">
                    <h1 style={{marginBottom:'1%', fontSize: '22px'}}>{product.nombre}</h1>
                    <h2 style={{marginTop:'3%', color: '#04989e'}}>${ product.variants[priceActive].price }</h2>
                    <p style={{marginBottom:'1%'}}>Descripción:</p>
                    <p style={{marginTop:'1%', marginBottom:'1%'}}>{product.descripcion}.</p>
                    <p>Este producto soporta {product.peso} y su tipo de sensación es de {product.sensacion}.</p>
                    <p>Elegir la medida:</p>
                        <select className="info-container_select" name='medida' onChange={handleInputChange}>
                        {product.variants.map((el, i) => (
                            <option key={i} value={i}>{el.size}</option>
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
