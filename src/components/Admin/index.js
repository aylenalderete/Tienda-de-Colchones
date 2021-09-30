import { useEffect, useState } from "react";
import Layout, { Grid } from "../GeneralComponents/layout";
import DashboardImage from '../../assets/adminSlider.png'
import Slider from "../GeneralComponents/slider";
import CreateProduct from "./createProduct";
import EditProduct from "./editProduct";
import DeleteProduct from "./deleteProduct";
import { dummyProducts } from "../../constants/dummyData";
import Card from "../GeneralComponents/card";
import { getAllProducts } from "../../database/product";
import { useDispatch } from "react-redux";
import { SET_ALL_PRODUCTS } from "../../constants/productConstans";
import { useSelector } from "react-redux";

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
            <Slider images={[{src: DashboardImage, title: 'Panel admin'}]} />
            <Grid>
                {Object.keys(sectionHelper).map((key) => (
                    <Card 
                        img={DashboardImage}
                        buttons={[
                            {
                                label:sectionHelper[key].label,
                                action:() => setSection(key)
                            }
                        ]}
                    />                
                ))}
            </Grid>
            {section && sectionHelper[section].component}
            {!section && (
                <Grid>
                    {allProducts.map((product) => (
                        <Card 
                            title={product.nombre}
                            img = {DashboardImage}
                            description = {product.descripcion}
                            price = {product.precio}
                            buttons = {[
                                {label: 'Editar', action: () => editProductHandler(product)},
                                {label: 'Eliminar', action: () => deleteProductHandler(product)},
                            ]}
                        />
                    ))}
                </Grid>
            )}
        </Layout>
    )
}

export default AdminView;