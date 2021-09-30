import React from 'react'
import Layout from "../GeneralComponents/layout";
import "../../styles/products.scss";
import DashboardImage from '../../assets/adminSlider.png'
import Slider from "../GeneralComponents/slider";
import Card from "../GeneralComponents/card"
import colchon from "../../assets/colchon1.png"
import Sliderprueba from '../GeneralComponents/sliderprueba';
import ProductsList from './productsList';

function Products() {
    return (
        <Layout>
            <>
                <Sliderprueba />
                <ProductsList />
            </>
        </Layout>
    )
}

export default Products
