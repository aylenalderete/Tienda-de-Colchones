import { useEffect, useState } from "react"
import "../../styles/GeneralComponents/adminforms.scss"
import { createDocument } from "../../database"
import { createProductDB } from "../../database/product"

const productInitialState = {
    nombre: '',
    precio: 0,
    descripcion: '',
    imagen: '',
    medida: [],
    peso: [],
    sensacion: [],
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
                <div>
                    <p>Seleccionar medidas:</p>
                    <div>
                        <input type="checkbox" id="medida" name="1 plaza"/>
                        <label for="1 plaza">1 plaza</label>
                    </div>
                    <div>
                        <input type="checkbox" id="1 plaza y media" name="1 plaza y media"/>
                        <label for="1 plaza y media">1 plaza y media</label>
                    </div>
                    <div>
                        <input type="checkbox" id="2 plazas" name="2 plazas"/>
                        <label for="2 plazas">2 plazas</label>
                    </div>
                    <div>
                        <input type="checkbox" id="2 plazas y media" name="2 plazas y media"/>
                        <label for="2 plazas y media">2 plazas</label>
                    </div>
                </div>
                {/* <select name='medida' onChange={handleInputChange}>
                    <option value='1 plaza'>1 plaza</option>
                    <option value='1 plaza y media'>1 plaza y media</option>
                    <option value='2 plazas'>2 plazas</option>
                    <option value='2 plazas y media'>2 plazas y media</option>
                </select> */}
                <div>
                    <p>Seleccionar peso:</p>
                    <div>
                        <input type="checkbox" id="peso" name="40kg"/>
                        <label for="40kg">40kg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peso" name="50kg"/>
                        <label for="50kg">50kg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peso" name="60kg"/>
                        <label for="60kg">60kg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peso" name="75kg"/>
                        <label for="75kg">75kgs</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peso" name="90kg"/>
                        <label for="90kg">90kg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peso" name="100kg"/>
                        <label for="100kg">100kg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peso" name="110kg"/>
                        <label for="110kg">110kg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peso" name="120kg"/>
                        <label for="120kg">120kg</label>
                    </div>
                    <div>
                        <input type="checkbox" id="peso" name="130kg"/>
                        <label for="130kg">130kg</label>
                    </div>
                </div>
                {/* <select name='peso' onChange={handleInputChange}>
                    <option value='40kg'>40kg</option>
                    <option value='50kg'>50kg</option>
                    <option value='60kg'>60kg</option>
                    <option value='75kg'>75kg</option>
                    <option value='90kg'>90kg</option>
                    <option value='100kg'>100kg</option>
                    <option value='110kg'>110kg</option>
                    <option value='120kg'>120kg</option>
                    <option value='130kg'>130kg</option>
                </select> */}
                <div>
                    <p>Seleccionar sensación:</p>
                    <div>
                        <input type="checkbox" id="medida" name="goma espuma"/>
                        <label for="goma espuma">goma espuma</label>
                    </div>
                    <div>
                        <input type="checkbox" id="alta densidad" name="alta densidad"/>
                        <label for="alta densidad">alta densidad</label>
                    </div>
                    <div>
                        <input type="checkbox" id="resorte" name="resorte"/>
                        <label for="resorte">resorte</label>
                    </div>
                </div>
                {/* <select name='sensacion' onChange={handleInputChange}>
                    <option value='goma espuma'>Goma espuma</option>
                    <option value='alta densidad'>Alta densidad</option>
                    <option value='resorte'>Resorte</option>
                </select> */}
                <input autoComplete='off' name="image" onChange={handleInputChange} type="file" name="imagen"/>
            </div>
            <div>
                <button type="submit" className="button">Crear producto</button>
            </div>
        </form>
    )
}

export default CreateProduct