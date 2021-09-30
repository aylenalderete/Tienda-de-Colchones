import { useEffect, useState } from "react"
import "../../styles/GeneralComponents/adminforms.scss"
import { createDocument } from "../../database"
import { createProductDB } from "../../database/product"

const productInitialState = {
    nombre: '',
    precio: 0,
    descripcion: '',
    imagen: ''
}

const CreateProduct = () => {
    const [productData, setproductData] = useState(productInitialState)

    const handleInputChange = (e) => {
        setproductData({...productData, [e.target.name] : e.target.value})
    }

    const sendData = (e) => {
        e.preventDefault()
        createProductDB(productData)
        .then(() => {
            alert('Producto creado!')
            setproductData(productInitialState)
        })
    }

    return (
        <form onSubmit={sendData} className="product--container">
            <div>
                <h2>Crear producto</h2>
            </div>
            <div className="input-container">
                <input autoComplete='off' name="nombre" onChange={handleInputChange} placeholder="Nombre del producto"></input>
                <input autoComplete='off' type='number' name="precio" onChange={handleInputChange} placeholder="Precio"></input>
                <input autoComplete='off' name="descripcion" onChange={handleInputChange} placeholder="Descripción del producto"></input>
                <input autoComplete='off' name="image" onChange={handleInputChange} type="file" name="imagen"/>
            </div>
            <div>
                <button type="submit" className="button">Crear producto</button>
            </div>
        </form>
    )
}

export default CreateProduct