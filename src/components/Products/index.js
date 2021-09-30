import React from 'react'
import Layout from "../GeneralComponents/layout";
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
