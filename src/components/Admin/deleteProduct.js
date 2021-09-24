import "../../styles/GeneralComponents/adminforms.scss"

const DeleteProduct = () => {

    const sendData = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <form onSubmit={sendData} className="product--container">
            <div>
                <h2>Eliminar producto</h2>
            </div>
            <div className="input-container">
                <select>
                    <option>Colchon 1</option>
                    <option>Colchon 2</option>
                </select>
            </div>
            <div>
                <button type="submit" className="button">Eliminar producto</button>
            </div>
        </form>
    )
}

export default DeleteProduct