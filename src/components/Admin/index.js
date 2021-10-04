import { useEffect, useState } from "react";
import Layout, { Grid } from "../GeneralComponents/layout";
import DashboardImage from '../../assets/adminSlider.png'
import adminSlider from '../../assets/adminSlider.png'
import image33 from "../../assets/image 33.png"
import CreateProduct from "./createProduct";
import EditProduct from "./editProduct";
import DeleteProduct from "./deleteProduct";
import Card from "../GeneralComponents/card";
import { getAllProducts } from "../../database/product";
import { useDispatch, useSelector } from "react-redux";
import { SET_ALL_PRODUCTS } from "../../constants/productConstans";
import { Link } from 'react-router-dom'

const AdminView = () => {
    const [section, setSection] = useState();
    const dispatch = useDispatch()
    const {allProducts} = useSelector(state => state.products)

    useEffect(() => {
        getAllProducts()
        .then((prods) => dispatch({type: SET_ALL_PRODUCTS, payload: prods}))
    }, [])

    const sectionHelper = {
        'create':{label: 'Crear producto', component: <CreateProduct />},
        'edit':{label: 'Editar producto', component: <EditProduct />},
        'delete':{label: 'Borrar producto', component: <DeleteProduct />}
    }

    const editProductHandler = (productData) => {
        console.log(productData)
    }
    const deleteProductHandler = (productData) => {
        console.log(productData)
    }

    return (
        <Layout searchBar={false}>
            <div className="admin-section_image-container">
                <img className="admin-section_image" src={adminSlider}></img>
                <h1 className="admin-section_title">Panel del administrador</h1>
            </div>
            {section && (
            <>
            <Grid height="6rem" width="9rem">
                <Card 
                            title = 'Volver'
                            style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}
                            cardAction={() => setSection('create')}
                        />
            </Grid>
            </>
            )}
            {section && sectionHelper[section].component}
            {!section && (
                <>
                    <Grid height="12rem" width="20rem">
                        {/* {Object.keys(sectionHelper).map((key) => ( */}
                            <Card 
                                img={image33}
                                title = 'Crear producto'
                                style={{display:'flex', flexDirection: 'row'}}
                                cardAction={() => setSection('create')}
                            />          
                        {/* ))} */}
                    </Grid>
                    
                    <div>
                        <h2 style={{textAlign: 'center', color:'rgb(44, 44, 44)'}}>Mis productos</h2>
                    </div>
                    <Grid height="26rem">
                        {allProducts.map((product) => (
                            <Card 
                                title={product.nombre}
                                img = {product.images[0]}
                                price = {product.variants[0].price}
                                buttons = {[
                                    {label: 'Editar', action: () => editProductHandler(product)},
                                    {label: 'Eliminar', action: () => deleteProductHandler(product)},
                                ]}
                            />
                        ))}
                    </Grid>
                </>

            )}
        </Layout>
    )
}

export default AdminView;