import React from 'react'
import Layout from '../GeneralComponents/layout'
import Colchon from '../../assets/colchon1.png'
import "../../styles/product.scss";

function Product() {
    return (
        <Layout>
            <div className="product-container">
                <div className="img-container">
                    <img className="img-product" src={Colchon}></img>
                </div>
                <div className="info-container">
                    <h1>Colchón + sommier</h1>
                    <p>$10000</p>
                    <p>Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra felis ac justo ullamcorper, at tristique arcu efficitur. Fusce elementum dui eget feugiat convallis. Duis dictum purus nec euismod pellentesque. Vivamus diam orci, </p>
                    <button className="button">Comprar</button>
                </div>
            </div>
        </Layout>
    )
}

export default Product
