import { useState } from "react";
import { getAllProducts } from "../../database/product";
import { useEffectAsync } from "../../utils/hooks";
import Card from "../GeneralComponents/card";
import { Grid } from "../GeneralComponents/layout";

const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffectAsync(async () => {
        const prods = await getAllProducts()
        setProducts(prods)
    }, [])

    return (
        <Grid>
            {products.map((el) => (
                <Card 
                    title={el.nombre}
                    description={el.descripcion}
                    price={el.precio}
                />
            ))}
        </Grid>
    )
}

export default ProductsList;