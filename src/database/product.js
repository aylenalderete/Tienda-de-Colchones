import Swal from "sweetalert2"
import { createDocument, deleteDocument, getCollection, getDocId, getDocument, putFileFB, updateDocument } from "."
import { DELETE_PRODUCT, UPDATE_PRODUCT, SET_NEW_PRODUCT} from "../constants/productConstans"
import { store } from "../store"

export const createProductDB = async (data) => {
    try {
        const collection = 'products'
        const {id, collectionPath} = getDocId(collection)
        await createDocument(`${collectionPath}/${id}`, {...data, images: []})
        if(data.images && data.images.length > 0){
            const images = await uploadImagesProduct(id, data.images)
            data.images = images
            await updateDocument(`${collection}/${id}`, {images})
        }
        store.dispatch({type: SET_NEW_PRODUCT, payload: {...data, doc_id: id}})        
    } catch (err) {        
        alert('Error al crear producto')
        console.error(err);
    }
}

export const updateProductDB = async (id, data) => {
    try {
        const path = `products/${id}`
        if(data.images && data.images.length > 0){
            let localImages = data.images.filter((el) => typeof el !== 'string')
            let urlImages = data.images.filter((el) => typeof el === 'string')
            if(localImages.length >0){
                const urlsNewImages = await uploadImagesProduct(id, localImages)
                urlImages = [...urlImages, ...urlsNewImages]
            }
            data.images = urlImages
        }
        await updateDocument(path, data)
        store.dispatch({type: UPDATE_PRODUCT, payload: data})
    } catch (err) {
        alert('Error al actualizar producto')
        console.error(err);
    }
}

export const deleteProduct = async (id) => {
    try {
        const path = `products/${id}`
        await deleteDocument(path)
        store.dispatch({type: DELETE_PRODUCT, payload: id})
    } catch (err) {
        alert('Error al elimianr producto')
        console.error(err);
    }
}

export const getAllProducts = async () => {
    try {
        let products = (store.getState()?.products?.allProducts) || []
        if(products.length === 0){
            products = await getCollection('products')
        }
        return products
    } catch (err) {
        console.error(err)
    }
}

export const getProduct = async (id) => {
    try {
        let product = (store.getState()?.products?.allProducts.find(el => el.doc_id === id))
        if(!product){
            product = await getDocument(`products/${id}`)
        }
        return product
    } catch (err) {
        console.error(err)
    }
}

export const uploadImagesProduct = async (productId, images) => {
    try {     
        Swal.fire('Subiendo imagenes...')
        Swal.showLoading()   
        const imageUrls = []
        for (let index = 0; index < images.length; index++) {
            const img = images[index];
            const url = await putFileFB(img, `/products/${productId}_${img.name}`)
            imageUrls.push(url)
        }
        Swal.hideLoading()
        return imageUrls;
    } catch (err) {
        console.error(err)
    }
}