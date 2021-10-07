import { useEffect, useState } from "react";
import Layout, { Grid } from "../GeneralComponents/layout";
import adminSlider from '../../assets/adminSlider.png'
import image33 from "../../assets/image 33.png"
import ProductForm from "./createProduct";
import DeleteProduct from "./deleteProduct";
import Card from "../GeneralComponents/card";
import "../../styles/GeneralComponents/card.scss"
import { deleteProduct, getAllProducts } from "../../database/product";
import { useDispatch, useSelector } from "react-redux";
import { SET_ALL_PRODUCTS } from "../../constants/productConstans";
import Swal from "sweetalert2";
import { useHistory, useLocation } from "react-router";
import queryString from 'query-string';

const AdminView = () => {
    const {allProducts} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const {section} = queryString.parse(location.search)

    useEffect(() => {
        getAllProducts()
        .then((prods) => dispatch({type: SET_ALL_PRODUCTS, payload: prods}))
    }, [])

    const sectionHelper = {
        'create':{label: 'Crear producto', component: <ProductForm />},
        'edit':{label: 'Editar producto', component: <ProductForm/>},
        'delete':{label: 'Borrar producto', component: <DeleteProduct />}
    }

    const editProductHandler = (productData) => {
        history.push(`?section=edit&productId=${productData.doc_id}`)        
    }

    const deleteProductHandler = async ({doc_id, nombre}) => {
        const res = await Swal.fire({
            title: `¿Desea eliminar "${nombre}"?`,
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true,
            reverseButtons: true
        })
        if(res.isConfirmed){
            Swal.fire('Eliminando')
            Swal.showLoading()
            await deleteProduct(doc_id)
            Swal.hideLoading()
            Swal.close()
        }
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
                    style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'15px', paddingTop: '3px', paddingBottom: '3px'}}
                    cardAction={() => history.push('?')}
                />
            </Grid>
            </>
            )}
            {section && sectionHelper[section].component}
            {!section && (
                <>
                    <Grid height="12rem" width="20rem">
                        <Card 
                            img={image33}
                            title = 'Crear producto'
                            style={{display:'flex', flexDirection: 'row'}}
                            cardAction={() =>  history.push(`?section=create`)}
                        />          
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