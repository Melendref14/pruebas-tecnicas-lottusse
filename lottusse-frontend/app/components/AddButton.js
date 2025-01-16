import { useState } from 'react';
import useAddProduct from '../hooks/addProduct';

const AddButton = ({ reloadProducts }) => {
    const { addProduct, loading, error, product } = useAddProduct();
    const [productName, setProductName] = useState('');
    const [inputError, setInputError] = useState('');
    const [inputSuccessful, setInputSuccessful] = useState('');

    const handleAddProduct = () => {
        if (!productName.trim()) {
            setInputError("Nombre del producto no puede estar vacio...");
            return;
        } else {
            setInputSuccessful("Producto añadido exitosamente...");
        }
        setInputError("");
        addProduct({ name: productName }, () => {
            reloadProducts();
            setProductName("");
        });
    };

    return (
        <div className="w-full max-w-md mx-auto mt-4">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Agregar Producto</h4>
            {/* Input para insertar el nombre del producto a añadir */}
            <input
                type="text"
                placeholder="Nombre del Producto"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            {/* Boton para agregar el producto */}
            <button
                className="w-full p-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg"
                onClick={handleAddProduct}
                disabled={loading}
            >
                {loading ? 'Añadiendo...' : 'Añadir Producto'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {product && <p className="text-green-500 mt-2">{inputSuccessful}</p>}
            {inputError && <p className="text-red-500 mt-2">{inputError}</p>}
        </div>
    );
};

export default AddButton;

