import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
                setProducts(response.data);
            } catch {
                setError("Error al obtener los productos, intentalo mas tarde...");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, error, loading };
};

export default useGetProducts;