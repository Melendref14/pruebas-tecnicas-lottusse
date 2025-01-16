import { useState } from "react";
import axios from "axios";

const useAddProduct = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const addProduct = async (productData) => {
        try {
            setLoading(true);
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, productData);
            setProduct(response.data);
        } catch {
            setError("Error añadiendo el producto, intenta mas tarde...");
        } finally {
            setLoading(false);
        }
    };

    return { product, error, loading, addProduct };
}

export default useAddProduct;