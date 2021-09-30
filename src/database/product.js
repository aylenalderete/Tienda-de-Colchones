import { createDocument, deleteDocument, getCollection, getDocId, getDocument, updateDocument } from "."
import { store } from "../store"

export const createProductDB = async (data) => {
    try {
        const collection = 'products'
        const {id, collectionPath} = getDocId(collection)
        await createDocument(`${collectionPath}/${id}`, data)        
    } catch (err) {        
        alert('Error al crear producto')
        console.error(err);
    }
}

export const updateProductDB = async (id, data) => {
    try {
        const path = `products/${id}`
        await updateDocument(path, data)
    } catch (err) {
        alert('Error al actualizar producto')
        console.error(err);
    }
}

export const deleteProduct = async (id) => {
    try {
        const path = `products/${id}`
        await deleteDocument(path)
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