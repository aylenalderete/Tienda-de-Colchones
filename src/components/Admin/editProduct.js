import { useState } from "react"
import "../../styles/GeneralComponents/adminforms.scss"


const EditProduct = () => {
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
    }

    return (
        <form onSubmit={sendData} className="product--container">
        <div>
            <h2>Editar producto</h2>
        </div>
        <div className="input-container">
            <select>
                <option>Colchon 1</option>
                <option>Colchon 2</option>
            </select>
            <input name="nombre" onChange={handleInputChange} placeholder="Nombre del producto"></input>
            <input name="precio" onChange={handleInputChange} placeholder="Precio"></input>
            <input name="descripcion" onChange={handleInputChange} placeholder="Descripción del producto"></input>
            <input name="image" onChange={handleInputChange} type="file" name="imagen"/>
        </div>
        <div>
            <button type="submit" className="button">Editar producto</button>
        </div>
    </form>
    )
}

export default EditProduct