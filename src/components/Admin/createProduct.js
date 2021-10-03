import { useState } from "react"
import "../../styles/GeneralComponents/adminforms.scss"
import { createProductDB } from "../../database/product"
import {FaTimesCircle} from 'react-icons/fa'

const productInitialState = {
    nombre: '',
    descripcion: '',
    imagen: [],
    medida: [],
    peso: [],
    sensacion: [],
    variants: []
}

const CreateProduct = () => {
    const [productData, setproductData] = useState(productInitialState)
    const [variant, setVariant] = useState(false)

    const handleInputChange = (e) => {
        setproductData({...productData, [e.target.name] : e.target.value})
    }

    // const handleSelectChange = ({target: {name, value}}) => {
    //     if(productData[name].includes(value)){
    //         setproductData({...productData, [name]: productData[name].filter((el) => el !== value)})
    //     } else {
    //         setproductData({...productData, [name]: [...productData[name], value]})
    //     }
    // }

    const sendData = (e) => {
        e.preventDefault()
        createProductDB(productData)
        .then(() => {
            alert('Producto creado!')
            setproductData(productInitialState)
        })
    }    

    const selectsHelper = [
        {
            label: "Seleccionar peso máximo: ",
            name: 'peso',
            items: ["40kg","50kg","60kg","75kg","90kg","100kg","110kg","120kg","130kg"]
        },
        {
            label: "Seleccionar sensación: ",
            name: 'sensacion',
            items: ["goma espuma","alta densidad","resorte"]
        }
    ]

    const variantSelect =  {
         label: 'Seleccionar medidas: ',
         name: 'medida',
         items: ["1 plaza", "1 plaza y media", "2 plazas", "2 plazas y media"]
     }

    return (
        <form onSubmit={sendData} className="product--container">
            <div>
                <h2>Crear producto</h2>
            </div>
            <div className="input-container">
                <input autoComplete='off' name="nombre" onChange={handleInputChange} placeholder="Nombre del producto"></input>
                <textarea autoComplete='off' rows='10' name="descripcion" onChange={handleInputChange} placeholder="Descripción del producto"/>
                {selectsHelper.map(({items, label, name}) => (
                    <div className='select__container' >
                        <p>{label}</p>
                        <select value={productData[name]} onChange={handleInputChange} name={name}>
                            <option value='' disabled>seleccione una opcion</option>
                            {items.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>                       
                    </div>
                ))}
                <input autoComplete='off' name="image" multiple='true' onChange={handleInputChange} type="file" name="imagen"/>
                <div className="variant__container">
                    <h5>Vatiantes</h5>
                    <p>{variantSelect.label}</p>
                    <select onChange={() => handleInputChange(productData.variants.length)}>
                        <option value='' disabled>seleccione una opcion</option>
                        {variantSelect.items.map((item) => (
                            <option value={item}>{item}</option>
                        ))}
                    </select> 
                    <input autoComplete='off' type='number' name="precio" onChange={handleInputChange} placeholder="Precio"></input>                
                    <button type='button' className='button' onClick={() => setVariant(true)}>Añadir variante</button>
                </div>
            </div>
            <div>
                <button type="submit" className="button">Crear producto</button>
            </div>
        </form>
    )
}

export default CreateProduct