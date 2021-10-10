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
    const [variant, setVariant] = useState({price: '', size: ''})
    const history = useHistory()
    const location = useLocation()
    const {productId, section} = queryString.parse(location.search)

    useEffect(() => {
        if(productId){
            getProduct(productId)
            .then((data) => {
                setproductData(data)
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
        setproductData({...productData, images: [...productData.images, ...files]})        
    }

    const renderImages = () => {
        const fileUrls = []
        for (let index = 0; index < productData.images.length; index++) {            
            const file = productData.images[index];
            if(typeof file !== 'string'){
                fileUrls.push(URL.createObjectURL(file))
            } else {
                fileUrls.push(file)
            }
        }
        return fileUrls
    }

    const sendData = async  (e) => {
        try {
            e.preventDefault()
            if(productData.variants.length === 0) return alert('Debe agregar al menos una variante')            
            if(productData.images.length === 0) return alert('Debe agregar al menos una imagen')
            await createProductDB(productData)
            Swal.fire('Producto creado!', '', 'success')
            setproductData(productInitialState)
        } catch (err) {
            
        }
    }    

    const removeImage = (i) => {
        let temp = [...productData.images]
        temp.splice(i, 1)
        setproductData({...productData, images: temp})
    }

    const updateData = async (e) => {
        try {
            e.preventDefault()
            Swal.fire('Actualizando...')
            Swal.showLoading()
            await updateProductDB(productId, productData)
            Swal.fire('Producto actualizado!', '', 'success')
            Swal.hideLoading()
            history.goBack()
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

    return (
        <form onSubmit={section === 'create' ? sendData : updateData} className="product--container">
            <div>
                <h2 style={{textAlign:'center',}}>{section === 'create' ? 'Crear producto' : 'Editar producto'}</h2>
            </div>
            <Grid className={'form-container'} >
                <div className='create_product--section' >
                    <input required value={productData['nombre']} autoComplete='off' name="nombre" onChange={handleInputChange} placeholder="Nombre del producto"></input>
                    <textarea required value={productData['descripcion']} autoComplete='off' rows='10' name="descripcion" onChange={handleInputChange} placeholder="Descripción del producto"/>
                </div>
                <div className='create_product--section'>
                    {selectsHelper.map(({items, label, name}) => (
                        <div className='select__container' >
                            <p>{label}</p>
                            <select required value={productData[name]} onChange={handleInputChange} name={name}>
                                <option value='' disabled>Seleccione una opcion</option>
                                {items.map((item) => (
                                    <option value={item}>{item}</option>
                                ))}
                            </select>                       
                        </div>
                    ))}
                </div>
                {/* <div className='create_product--section' >
                    <label>
                        Subir imagenes
                        <FaUpload />
                        <input multiple={true} onChange={handleUploadImages} type="file"/>
                    </label>
                    <div className="imagesContainer" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                        {productData.images.length > 0 && renderImages().map((src) => (
                            <div className="image">
                                <img src={src} style={{margin: '5px'}} width={100} />
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="create_product--section">
                    <div className="variant__form">
                        <h5>Variantes</h5>
                        <div className="variants__items">
                        {productData.variants.map(({size, price }, i) => (
                            <>
                                <span key={i} onClick={() => handleRemoveVariant(i)}>
                                    {size} - ${price}<FaTimesCircle />
                                </span>
                            </>
                        ))}
                        </div>
                        <p>{variantSelect.label}</p>
                        <select name='size' value={variant.size} onChange={handleVariantChange}>
                            <option value='' disabled>Seleccione una opcion</option>
                            {variantSelect.items.map((item) => (
                                <option key={item} value={item}>{item}</option>
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
                        {renderImages().map((src, i) => (
                            <div key={i} className="image"> 
                                <FaTimesCircle onClick={() => removeImage(i)} />                               
                                <img alt={i} src={src} style={{margin: '5px'}} width={100} />
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