import { useState } from "react";
import { getAllProducts } from "../../database/product";
import { useEffectAsync } from "../../utils/hooks";
import Card from "../GeneralComponents/card";
import { Grid } from "../GeneralComponents/layout";
import { useHistory } from "react-router-dom"
import Loading from "../GeneralComponents/loading";

const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()


    useEffectAsync(async () => {
        const prods = await getAllProducts()
        console.log(prods)
        setProducts(prods)
        setLoading(false)
    }, [])

    return (
        <Grid height='17rem'>
            {loading ? <Loading />
                :
            products.map((el) => (
                <Card 
                    cardAction={() => history.push(`/product/${el.doc_id}`)}
                    key={el.doc_id}
                    img={el.images}
                    title={el.nombre}
                    price={el.variants[0].price}
                />
            ))
            }
        </Grid>
    )
}

export default ProductsList;