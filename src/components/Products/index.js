import React from 'react'
import Layout from "../GeneralComponents/layout";
import "../../styles/products.scss";
import DashboardImage from '../../assets/adminSlider.png'
import Slider from "../GeneralComponents/slider";
import Card from "../GeneralComponents/card"
import colchon from "../../assets/colchon1.png"

function Products() {
    return (
        <Layout>
            <div>
                <Slider images={[{src: DashboardImage}]} />
                <div className="product-section-container">
                    <div className="filters-container">
                        <p>Ordenar por:</p>
                        <select>
                            <option>Precio menor a mayor</option>
                        </select>
                    </div>
                    <div className="products-container">
                        <Card img={colchon} title='Colchon' price="$10000" />
                        <Card img={colchon} title='Colchon' price="$10000" />
                        <Card img={colchon} title='Colchonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn' price="$10000" />
                        <Card img={colchon} title='Colchon' price="$10000" />
                        <Card img={colchon} title='Colchon' price="$10000" />
                        <Card img={colchon} title='Colchon' price="$10000" />
                        <Card img={colchon} title='Colchon' price="$10000" />
                        <Card img={colchon} title='Colchon' price="$10000" />
                        <Card img={colchon} title='Colchon' price="$10000" />
                        <Card img={colchon} title='Colchon' price="$10000" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Products
