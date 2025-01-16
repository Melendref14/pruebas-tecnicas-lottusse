"use client";

import { useState } from "react";
import Image from "next/image";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import useProducts from "./hooks/useProducts";
import logo from "./assets/logo.svg";
import AddButton from "./components/AddButton";

const Products = () => {
    const { products, error, loading } = useProducts();
    const [searchName, setSearchName] = useState("");

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchName.toLowerCase())
    );

    return (
        <div className="relative bg-mesh w-full min-h-screen p-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
                <Image src={logo} alt="Logo" className="w-32 h-auto" />
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {/* Card izquierdo con Titulo y Subtitulos */}
                <div className="col-span-1 bg-white p-6 rounded-lg shadow-lg h-max">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Lista de Productos</h1>
                    <ul className="list-disc ml-5 space-y-2 text-gray-700 font-semibold">
                        <li>Busca productos por su nombre 🔎</li>
                        <li>Nombre con descripcion detallada de cada producto.. ✨</li>
                        <li>Diseño Responsivo para todos los dispositivos 📱</li>
                    </ul>
                    <SearchBar searchName={searchName} setSearchName={setSearchName} />
                    <AddButton />
                </div>
                {/* Card derecho para mostrar los productos */}
                <div className="col-span-1 md:col-span-2">
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <p>Cargando productos...</p>
                        </div>
                    ) : error ? (
                        <div className="flex justify-center items-center">
                            <p className="text-red-500">{error}</p>
                        </div>
                    ) : (
                        <ProductList products={filteredProducts} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;