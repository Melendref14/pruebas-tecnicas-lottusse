import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import useDeleteProduct from "../hooks/useDeleteProduct";
import ErrorAlert from "./ErrorAlert";
import SuccessAlert from "./SuccessAlert";
import DeleteModal from "./DeleteModal";

const ProductList = ({ products }) => {
    const { deleteProduct, loading, error, success } = useDeleteProduct();
    const [showModal, setShowModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const handleDelete = (id) => {
        setSelectedProductId(id);
        setShowModal(true);
    };

    const deleteModal = () => {
        deleteProduct(selectedProductId);
        setShowModal(false);
    };

    return (
        <div className="space-y-6">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg w-full"
                >
                    <div className="flex-shrink-0 mr-4">
                        <div className="h-12 w-12 bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-700 rounded-full">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900">
                            {product.name}
                        </h2>
                    </div>
                    <button
                        onClick={() => handleDelete(product.id)}
                        className="text-red-500 hover:text-red-700"
                        disabled={loading}
                    >
                        <FaTimes />
                    </button>
                </div>
            ))}
            {error && <ErrorAlert message={error} />}
            {success && <SuccessAlert message={success} />}
            <DeleteModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={deleteModal}
            />
        </div>
    );
};

export default ProductList;