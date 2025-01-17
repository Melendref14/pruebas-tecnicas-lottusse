import { useState } from 'react';
import useAddProduct from '../hooks/useAddProduct';

const AddButton = () => {
    const { addProduct, loading, error, successMessage } = useAddProduct();
    const [productName, setProductName] = useState('');

    const handleAddProduct = () => {
        addProduct({ name: productName }, () => {
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
                className="w-full p-2 mt-4 bg-black text-white font-semibold rounded-lg"
                onClick={handleAddProduct}
                disabled={loading}
            >
                {loading ? 'Añadiendo...' : 'Añadir Producto'}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        </div>
    );
};

export default AddButton;

