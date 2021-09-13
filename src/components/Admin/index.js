import { useState } from "react";
import Layout from "../GeneralComponents/layout";
import DashboardImage from '../../assets/adminSlider.png'
import Slider from "../GeneralComponents/slider";
import CreateProduct from "./createProduct";
import EditProduct from "./editProduct";
import DeleteProduct from "./deleteProduct";
import { dummyProducts } from "../../constants/dummyData";
import Card from "../GeneralComponents/card";

const AdminView = () => {
    const [section, setSection] = useState();

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
            <div className="sectionsButtons" style={{display: 'flex', justifyContent: 'space-around'}} >
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
            </div>
            {section && sectionHelper[section].component}
            {!section && (
                <div className="productsContainer" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {dummyProducts.map((product) => (
                        <Card 
                            title={product.title}
                            img = {DashboardImage}
                            description = {product.description}
                            price = {product.price}
                            buttons = {[
                                {label: 'Editar', action: () => editProductHandler(product)},
                                {label: 'Eliminar', action: () => deleteProductHandler(product)},
                            ]}
                        />
                    ))}
                </div>
            )}
        </Layout>
    )
}

export default AdminView;