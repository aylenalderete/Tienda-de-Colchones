import { useEffect, useRef, useState } from "react";
import Card from "../GeneralComponents/card";
import { Grid } from "../GeneralComponents/layout";
import Loading from "../GeneralComponents/loading";
import {getAllProducts} from '../../database/product'
import { useHistory, useLocation} from "react-router-dom"
import queryString from 'query-string';
import { filterItems, filterSearchBar } from "./filterUtils";
import '../../styles/productList.scss'

const ProductsList = ({maxItems}) => {
    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState({ideal: [], size: [], weight: [], sensation: []})
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    const location = useLocation()
    const params = queryString.parse(location.search) || {}
    const topRef = useRef(null)

    useEffect(() => {
        getAllProducts()
        .then((prods) => {
            if (params.filterSteps){
                const itemsFiltered = filterItems(prods, {size: params.size, weight: params.weight, sensation: params.sensation})                        
                setProductsFiltered(itemsFiltered)
                setLoading(false)
            } else if (params.search) {
                const itemsFiltered = filterSearchBar(prods, params.search)            
                setProducts(itemsFiltered)
                setLoading(false)
            } else {
                setLoading(false)
                setProducts(prods)
            }
        })
        .catch((error) => setLoading(false))
    }, [params.filterSteps, params.search, params.size, params.weight, params.sensation])
    
    useEffect(() => (
        params?.filterSteps && setTimeout(() => window.scrollTo({ top: topRef.current.offsetTop, behavior: 'smooth' }), 200) 
    ), [loading, params?.filterSteps])

    const titles = {
        'ideal': 'Productos ideales según tu busqueda: ',
        'size': 'Productos en cuanto al tamaño seleccionado: ',
        'weight': 'Productos en cuanto al peso seleccionado: ',
        'sensation': 'Productos en cuanto al la sensación seleccionada: ',
    }

    const renderItemsFiltered = (type, i) => {
        return (
            <div key={i} className='items-container' >
                <div className="items-subtitle">
                    <h2>{titles[type]}</h2>
                </div>
                <Grid height='22rem'>
                    {productsFiltered[type].map((el) => (
                        <Card
                            imgStyle={{width: '220px'}}
                            style={{width: '220px', textAlign: 'center'}}
                            description={el.propDescription} 
                            descriptionMaxLength={el.propDescription.length}
                            cardAction={() => history.push(`/product/${el.doc_id}`)}
                            key={el.doc_id}
                            img={el.images[0]}
                            title={el.nombre}
                            price={el.variants[0].price}
                        />
                    ))}
                </Grid>
            </div>
        )
    }   


    return (
        <div className='container' ref={topRef} >
            {loading && ( <Loading />)}
            {!loading && !params?.filterSteps && (
                <Grid height='22rem'>
                    {products
                        .slice(0, maxItems)
                        .map((el) => (
                            <Card 
                                imgStyle={{width: '220px'}}
                                style={{width: '220px', textAlign: 'center'}}
                                cardAction={() => history.push(`/product/${el.doc_id}`)}
                                key={el.doc_id}
                                img={el.images}
                                title={el.nombre}
                                price={el.variants[0].price}
                            />
                        ))}
                </Grid>
            )}
            {!loading && params.filterSteps && 
                productsFiltered.ideal.length === 0 && 
                productsFiltered.size.length === 0 && 
                productsFiltered.weight.length === 0 && 
                productsFiltered.sensation.length === 0 && (
                <div className="nonItems-container">
                    <h4>No encontramos articulos relacionados a su busqueda</h4>
                </div>
            )}
            {!loading && params.filterSteps && 
                Object.keys(productsFiltered).map((type, i) => (
                    productsFiltered[type].length > 0 && renderItemsFiltered(type, i)
                ))
            }
        </div>
    )
}

export default ProductsList;