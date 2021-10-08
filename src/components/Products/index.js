import React from 'react'
import Layout from "../GeneralComponents/layout";
import "../../styles/products.scss";
import slider1 from "../../assets/slider1.png"
import ProductsList from './productsList';
import queryString from 'query-string';

function Products() {
    return (
        <Layout>
            <>
                <div className="products-section_image-container">
                    <img className="products-section_image" src={slider1}></img>
                    <h1 className="products-section_title">Productos</h1>
                </div>
                <div>
                    <ProductsList />
                </div>
            </>
        </Layout>
    )
}

export default Products
