import { useState } from "react";
import "../../styles/GeneralComponents/adminforms.scss"
import { getAllProducts } from "../../database/product"
import { deleteProduct } from "../../database/product"
import { useEffectAsync } from "../../utils/hooks";

const DeleteProduct = () => {
    const [products, setProducts] = useState([])
    const [deleteproduct, setDeleteProduct] = useState({doc_id: ""})

    useEffectAsync(async () => {
        const prods = await getAllProducts()
        setProducts(prods)
    }, [])

    const handleChange = (e) => {
        setDeleteProduct({ doc_id: e.target.value });
    }

    const sendData = (e) => {
        e.preventDefault()
        deleteProduct(deleteProduct)
    }

    return (
        <form onSubmit={sendData} className="product--container">
            <div>
                <h2>Eliminar producto</h2>
            </div>
            <div className="input-container">
                <select value={deleteproduct.doc_id} onChange={handleChange}>
                {products.map((el) => (
                    <option value={el.doc_id}>{el.nombre}</option>
                ))}
                </select>
            </div>
            <div>
                <button type="submit" className="button">Eliminar producto</button>
            </div>
        </form>
    )
}

export default DeleteProduct