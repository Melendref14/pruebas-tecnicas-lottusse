import { useState } from 'react';

const AddProduct = () => {
    const [showForm, setShowForm] = useState(false);
    const [productName, setProductName] = useState("");

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const handleInputChange = (e) => {
        setProductName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefaut();
        console.log("Producto añadido: ", productName);
        setShowForm(false);
    };

    return (
        <div>
            <button 
                onClick={handleButtonClick}
                className="bg-blue-500 text-white px-4 py-2 rounded"
                
            >
            {showForm && (
                <div className="form-container">
                    <form>
                        <label>
                            Nombre del producto:
                            <input 
                                type="text"
                                value={productName}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="submit">Crear Producto</button>
                        <button type="button" onClick={handleCloseForm}>X</button>
                    </form>
                </div>
            )}
            </button>
        </div>
    );
};

export default AddProduct;