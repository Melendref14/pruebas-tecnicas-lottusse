;import { useState } from "react";
import axios from "axios";

const useDeleteProduct = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const deleteProduct = async (id) => {
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
            setSuccess(response.data.message)
        } catch (error) {
            setError(error.response?.data?.message)
        } finally {
            setLoading(false);
        }
    };

    return { deleteProduct, loading, error, success };
};

export default useDeleteProduct;