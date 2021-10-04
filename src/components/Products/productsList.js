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
    console.log(products)

    return (
        <Grid height='25rem'>
            {products.map((el) => (
                <Link to={`/product/${el.doc_id}`}>
                    <Card 
                        key={el.doc_id}
                        img={el.images}
                        title={el.nombre}
                        price={el.variants[0].price}
                    />
                </Link>
            ))}
        </Grid>
    )
}

export default ProductsList;