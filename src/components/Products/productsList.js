import { useState } from "react";
import { getAllProducts } from "../../database/product";
import { useEffectAsync } from "../../utils/hooks";
import Card from "../GeneralComponents/card";
import { Grid } from "../GeneralComponents/layout";
import { Link } from "react-router-dom"

const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffectAsync(async () => {
        const prods = await getAllProducts()
        console.log(prods)
        setProducts(prods)
    }, [])

    return (
        <Grid>
            {products.map((el) => (
                    <Link to={`/product/${el.doc_id}`}>
                    <Card 
                        key={el.doc_id}
                        title={el.nombre}
                        description={el.descripcion}
                        price={el.precio}
                    />
                </Link>
            ))}
        </Grid>
    )
}

export default ProductsList;