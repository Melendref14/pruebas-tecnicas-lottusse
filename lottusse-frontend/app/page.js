"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [searchName, setSearchName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError('Error fetching products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
        <div className="w-full bg-gray-200 min-h-screen p-8">
            <div className="container mx-auto grid grid-cols-3 gap-8">
                {/* Card izquierdo con Titulo y Subtitulos */}
                <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg h-auto">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Lista de Productos</h1>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700">
                        <li>Busca productos por su nombre 🔎</li>
                        <li>Nombre con descripcion detallada de cada producto.. ✨</li>
                        <li>Diseño Responsivo para todos los dispositivos 📱</li>
                    </ul>
                    <SearchBar searchName={searchName} setSearchName={setSearchName} />
                </div>

                {/* Card derecho para mostrar los productos */}
                {loading ? (
                    <div className="col-span-2 flex justify-center items-center">
                        <p>Cargando productos...</p>
                    </div>
                ) : error ? (
                    <div className="col-span-2 flex justify-center items-center">
                        <p className="text-red-500">{error}</p>
                    </div>
                ) : (
                    <ProductList products={filteredProducts} />
                )}
            </div>
        </div>
    );
};

export default Products;