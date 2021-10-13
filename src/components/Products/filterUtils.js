const filterSize = (arr, val) => {    
    return arr.filter((el) => el.variants.some((variant) => val.includes(variant.size)))
}

const filterWeigth = (arr, val) => {
    let weights = ["40kg","50kg","60kg","75kg","90kg","100kg","110kg","120kg","130kg"]
    const index = weights.indexOf(val)
    const idealWeightsSupported = weights.slice(index, index + 2)
    const allWeightsSupported = weights.slice(index)
    return [
        arr.filter((el) => idealWeightsSupported.includes(el.peso)),
        arr.filter((el) => allWeightsSupported.includes(el.peso))
    ]
}

const filterSensation = (arr, val) => {
    return arr.filter((el) => val.includes(el.sensacion))
}


export const filterItems = (prods, {size, weight, sensation}) => {
    let sizeFiltered = [], weightFiltered = [], sensationFiltered = [], itemsFiltered = null
    if(size) {
        let val = size.includes(',') ? size.split(',') : [size]
        sizeFiltered = filterSize(prods, val)
        itemsFiltered = [...sizeFiltered]
    } 

    if(weight){
        const [idealWeights, allWeights] = filterWeigth(itemsFiltered || prods, weight)
        weightFiltered = [...allWeights]
        itemsFiltered = [...idealWeights]
    } 

    if(sensation){
        let val = sensation.includes(',') ? sensation.split(',') : [sensation]
        sensationFiltered = filterSensation(prods, val)
        itemsFiltered = filterSensation(itemsFiltered, val)
    }
    
    return {
        ideal: ([size, weight, sensation].length > 1) ? itemsFiltered.map((item) => addDescription({item, size, weight, sensation})) : [], 
        size: sizeFiltered.map((item) => addDescription({item, size})), 
        weight: weightFiltered.map((item) => addDescription({item, weight})), 
        sensation: sensationFiltered.map((item) => addDescription({item, sensation}))
    }
}

function addDescription({item, size, weight, sensation, ideal}){
    let description = ''
    if(size || ideal){
        let text = `Medidas: ${size}. \n`
        description+=text
    }
    if(weight || ideal){
        let text = `Peso max: ${item.peso}. \n`
        description+=text
    }
    if(sensation || ideal){
        let text = `Material: ${item.sensacion}. \n`
        description+=text
    }
    return {...item, propDescription: description}
}

function removeAccents(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

function searchValueRecursived(obj, val){
    for (const key in obj) {
        const el = obj[key]
        if(typeof el === 'object'){
            return searchValueRecursived(el, val)
        }else if(removeAccents(el).toLowerCase() === val){
            return true
        }
    }
}

export const filterSearchBar = (prods, search) => {
    let words = search.toLowerCase().split(' ').map((el) => removeAccents(el))   
    let temp = prods.map((prod) => {
        let occurrences = 0
        let sentence = ''
        for (const searchWord of words) {    
            sentence += searchWord + ' '
            const prodsWords = JSON.stringify(prod, (key,value) => ['images', 'doc_id'].includes(key) ? '' : value).split(' ')
            for (const Word of prodsWords) {
                if(removeAccents(Word).toLowerCase().includes(searchWord)){
                    occurrences++
                    if(removeAccents(Word).toLowerCase().includes(searchWord)){
                        occurrences+= sentence.length
                    }
                }
            }
            if(!sentence) continue
            for (const key in prod) {
                if(['images', 'doc_id'].includes(key)) continue
                const el = prod[key]
                if(typeof el === 'object'){
                    const result = searchValueRecursived(el, sentence.trim())
                    if(result) occurrences+= sentence.length * 3
                }else if(removeAccents(el).toLowerCase() === sentence.trim()){
                    occurrences+= sentence.length * 3
                }  
            }
        }
        return {prod, occurrences}
    }, [])
    temp.sort((a, b) => b.occurrences - a.occurrences)    
    return temp.filter(el => el.occurrences > 0).map((el) => el.prod)
}