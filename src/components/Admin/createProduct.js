import { useState } from "react"
import "../../styles/GeneralComponents/adminforms.scss"

const CreateProduct = () => {
    const [productData, setproductData] = useState({
        nombre: '',
        precio: 0,
        descripcion: '',
        imagen: ''
    })

    const handleInputChange = (e) => {
        setproductData({...productData, [e.target.name] : e.target.value})
    }

    const sendData = (e) => {
        e.preventDefault()
        console.log(productData)
    }

    return (
        <form onSubmit={sendData} className="product--container">
            <div>
                <h2>Crear producto</h2>
            </div>
            <div className="input-container">
                <input name="nombre" onChange={handleInputChange} placeholder="Nombre del producto"></input>
                <input name="precio" onChange={handleInputChange} placeholder="Precio"></input>
                <input name="descripcion" onChange={handleInputChange} placeholder="Descripción del producto"></input>
                <input name="image" onChange={handleInputChange} type="file" name="imagen"/>
            </div>
            <div>
                <button type="submit" className="button">Crear producto</button>
            </div>
        </form>
    )
}

export default CreateProduct