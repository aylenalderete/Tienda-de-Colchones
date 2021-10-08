import { useState } from "react";
import { getAllProducts } from "../../database/product";
import { useEffectAsync } from "../../utils/hooks";
import Card from "../GeneralComponents/card";
import { Grid } from "../GeneralComponents/layout";
import { useHistory } from "react-router-dom"

const ProductsList = () => {
    const [products, setProducts] = useState([])
    const history = useHistory()


    useEffectAsync(async () => {
        const prods = await getAllProducts()
        console.log(prods)
        setProducts(prods)
    }, [])

    return (
        <Grid height='17rem'>
            {products.map((el) => (
                <Card 
                    cardAction={() => history.push(`/product/${el.doc_id}`)}
                    key={el.doc_id}
                    img={el.images}
                    title={el.nombre}
                    price={el.variants[0].price}
                />
            ))}
        </Grid>
    )
}

export default ProductsList;