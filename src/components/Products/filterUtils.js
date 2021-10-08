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
    let sizeFiltered = [], weightFiltered = [], sensationFiltered = [], itemsFiltered = []
    if(size) {
        let val = size.includes(',') ? size.split(',') : [size]
        sizeFiltered = filterSize(prods, val)
        itemsFiltered = [...sizeFiltered]
    } 

    if(weight){
        const [idealWeights, allWeights] = filterWeigth(prods, weight)
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