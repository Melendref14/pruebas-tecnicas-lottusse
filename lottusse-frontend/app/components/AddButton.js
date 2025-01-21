import { useEffect, useState } from "react";
import useAddProduct from "../hooks/useAddProduct";
import SuccessAlert from "./SuccessAlert"
import ErrorAlert from "./ErrorAlert"

const AddButton = ({ onProductAdded }) => {
    const { addProduct, loading, error, successMessage } = useAddProduct();
    const [productName, setProductName] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (successMessage) {
            setShowSuccess(true);
            const timer = setTimeout(() => setShowSuccess(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    useEffect(() => {
        if (error) {
            setShowError(true);
            const timer = setTimeout(() => setShowError(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleAddProduct = () => {
        addProduct({ name: productName }, () => {
            setProductName("");
            onProductAdded();
        });
    };

    return (
        <div className="w-full max-w-md mx-auto mt-4">
            <hr className="my-4 border-t-2 border-gray-800" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Añadir Producto</h1>
            {/* Input para insertar el nombre del producto a añadir */}
            <div className="relative">
                <input
                    placeholder="Nombre del producto"
                    className="input shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-full transition-all outline-none"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    name="search"
                    type="text"
                />
            </div>
            {/* Boton para agregar el producto */}
            <div className="flex justify-center mt-4">
                <button
                    className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-md group mt-2"
                    onClick={handleAddProduct}
                    disabled={loading}
                >
                <span
                    className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-600 rounded-full group-hover:w-56 group-hover:h-56"
                ></span>
                <span className="absolute bottom-0 left-0 h-full -ml-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-auto h-full opacity-100 object-stretch"
                        viewBox="0 0 487 487"
                    >
                    <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    ></path>
                    </svg>
                </span>
                <span className="absolute top-0 right-0 w-12 h-full -mr-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="object-cover w-full h-full"
                        viewBox="0 0 487 487"
                    >
                    <path
                        fillOpacity=".1"
                        fillRule="nonzero"
                        fill="#FFF"
                        d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    ></path>
                    </svg>
                </span>
                <span
                    className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"
                ></span>
                <span className="relative text-base font-semibold">{loading ? 'Añadiendo...' : 'Añadir Producto'}</span>
                </button>
            </div>
            {showError && <ErrorAlert message={error} />}
            {showSuccess && <SuccessAlert message={successMessage} />}
        </div>
        
    );
};

export default AddButton;

