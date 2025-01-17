import { useState } from 'react';
import axios from 'axios';

const useAddProduct = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    const addProduct = async (productData, callback) => {
        setLoading(true);
        setError(null);
        setSuccessMessage(null);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, productData);

            if (response.data.success) {
                setProduct(response.data.product);
                setSuccessMessage(response.data.message);
                if (callback) callback();
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setProduct(null);
            setSuccessMessage(null);
            const errorMessage = error.response?.data?.message;
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { product, error, loading, successMessage, addProduct };
}

export default useAddProduct;