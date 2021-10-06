import { useEffect, useState } from "react"
import "../../styles/GeneralComponents/adminforms.scss"
import { createProductDB, getProduct, updateProductDB } from "../../database/product"
import {FaTimesCircle, FaUpload} from 'react-icons/fa'
import {Grid} from '../GeneralComponents/layout'
import Swal from "sweetalert2"
import { useHistory, useLocation } from "react-router"
import queryString from 'query-string';

const productInitialState = {
    nombre: '',
    descripcion: '',
    images: [],
    peso: '',
    sensacion: '',
    variants: []
}

const ProductForm = () => {
    const [productData, setproductData] = useState(productInitialState)
    const [imagesPreview, setImagesPreview] = useState([])
    const [variant, setVariant] = useState({price: '', size: ''})
    const history = useHistory()
    const location = useLocation()
    const {productId, section} = queryString.parse(location.search)

    useEffect(() => {
        if(productId){
            getProduct(productId)
            .then((data) => {
                setproductData(data)
                setImagesPreview(data.images)
            })
        }
    },[productId]) 

    const handleInputChange = (e) => {
        setproductData({...productData, [e.target.name] : e.target.value})
    }
    const handleVariantChange = ({target:{value, name}}) => setVariant({...variant, [name]: value})

    const handleAddVariant = () => {
        if(!variant.price || !variant.size) return alert('agrega el precio y el tamaño')
        setproductData({...productData, variants: [...productData.variants, variant]})
        setVariant({price: '', size: ''})
    }

    const handleRemoveVariant = (i) => {
        let temp = [...productData.variants]
        temp.splice(i, 1)
        setproductData({...productData, variants: temp})
    }

    const handleUploadImages = ({target: {files}}) => {
        const fileUrls = []
        for (let index = 0; index < files.length; index++) {
            const file = files.item(index);
            fileUrls.push(URL.createObjectURL(file))
        }
        setproductData({...productData, images: files})
        setImagesPreview(fileUrls)
    }

    const sendData = async  (e) => {
        try {
            e.preventDefault()
            await createProductDB(productData)
            Swal.fire('Producto creado!', '', 'success')
        } catch (err) {
            
        }
    }    

    const updateData = async (e) => {
        try {
            e.preventDefault()
            await updateProductDB(productId, productData)
            Swal.fire('Producto creado!', '', 'success')
        } catch (err) {            
            console.error(err)
        }
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

     console.log(productData)
    return (
        <form onSubmit={section === 'create' ? sendData : updateData} className="product--container">
            <div>
                <h2 style={{textAlign:'center',}}>{section === 'create' ? 'Crear producto' : 'Editar producto'}</h2>
            </div>
            <Grid className={'form-container'} >
                <div className='create_product--section' >
                    <input value={productData['nombre']} autoComplete='off' name="nombre" onChange={handleInputChange} placeholder="Nombre del producto"></input>
                    <textarea value={productData['descripcion']} autoComplete='off' rows='10' name="descripcion" onChange={handleInputChange} placeholder="Descripción del producto"/>
                </div>
                <div className='create_product--section'>
                    {selectsHelper.map(({items, label, name}) => (
                        <div className='select__container' >
                            <p>{label}</p>
                            {console.log(productData[name])}
                            <select value={productData[name]} onChange={handleInputChange} name={name}>
                                <option value='' disabled>Seleccione una opcion</option>
                                {items.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>                       
                        </div>
                    ))}
                </div>
                <div className="create_product--section">
                    <div className="variant__form">
                        <h5>Variantes</h5>
                        <div className="variants__items">
                        {productData.variants.map(({size, price }, i) => (
                            <>
                                <span onClick={() => handleRemoveVariant(i)}>
                                    {size} - ${price}<FaTimesCircle />
                                </span>
                            </>
                        ))}
                        </div>
                        <p>{variantSelect.label}</p>
                        <select name='size' value={variant.size} onChange={handleVariantChange}>
                            <option value='' disabled>Seleccione una opcion</option>
                            {variantSelect.items.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select> 
                        <input autoComplete='off' value={variant.price} type='number' name="price" onChange={handleVariantChange} placeholder="Precio"></input>                
                        <button type='button' className='button' onClick={handleAddVariant}>Añadir variante</button>                    
                    </div>
                </div>
                <div className='create_product--section' >
                    <label className='create_product--section_label' style={{backgroundColor:'#eeeeee', height: '2rem', width:'13rem', borderRadius:'15px', textAlign:'center', alignItems:'center', display:'flex', justifyContent:'center', cursor:'pointer'}}>
                        Subir imagenes 
                        <FaUpload />
                        <input multiple={true} onChange={handleUploadImages} type="file"/>
                    </label>
                    <div className="imagesContainer" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                        {imagesPreview.map((src) => (
                            <div className="image">
                                <img src={src} style={{margin: '5px'}} width={100} />
                            </div>
                        ))}
                    </div>
                </div>
            </Grid>
            <div style={{justifyContent:'center', display: 'flex', margin:'3%'}}>
                <button type="submit" className="button">{section === 'create' ? 'Crear producto' : 'Editar producto'}</button>
            </div>
        </form>
    )
}

export default ProductForm