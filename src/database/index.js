import { db, storage } from "../config/firebase";
import { web_id } from "../constants/APP";

const normalizePath = (path) => {
    if(!path.includes(`webs/${web_id}`)){
        let args = path.split("/");
        args.unshift(web_id);
        args.unshift('webs');
        path = args.join('/')
    }
    return path;
}

export const createDocument = async (path, data) => {
    try {
        if(!data) throw 'Pls enviame la data'
        await db.doc(path).set(data)
    } catch (err) {
        alert('Error al crear')
        console.error(err)
    }
}

export const updateDocument = async (path, data) => {
    try {
        if(!data) throw 'Pls enviame la data'
        await db.doc(normalizePath(path)).update(data)
    } catch (err) {
        alert('Error al actualizar')
        console.error(err)
    }
}

export const deleteDocument = async (path) => {
    try {
        await db.doc(normalizePath(path)).delete()
    } catch (err) {
        alert('Error al eliminar')
        console.error(err)
    }
}


export const getDocument = async (path) => {
    try {
        return (await db.doc(normalizePath(path)).get()).data()
    } catch (err) {
        alert(err)
        console.error(err)
    }
}

export const getCollection = async (path) => {
    try {
        return (await db.collection(normalizePath(path)).get()).docs.map(el => ({...el.data(), doc_id: el.id}))
    } catch (err) {
        alert(err)
        console.error(err)
    }
}

export const getDocId = (collectionPath) => {
    collectionPath = normalizePath(collectionPath)
    console.log(db)
    const id =  db.collection(collectionPath).doc().id
    return {id, collectionPath}
}

//storage
export async function putFileFB(file, fileName){
	try {
		const res = await storage.child(normalizePath(fileName)).put(file)
		return await res.ref.getDownloadURL()
	} catch (error) {
		//console.error(error)
		return error;
	}
}