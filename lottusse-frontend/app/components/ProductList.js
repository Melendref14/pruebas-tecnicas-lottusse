const ProductList = ({ products }) => (
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
                    <p className="text-sm text-gray-500">{product.brand}</p>
                    <h2 className="text-lg font-semibold text-gray-900">
                        {product.name}
                    </h2>
                    <p className="text-sm text-gray-500">{product.description}</p>
                </div>
            </div>
        ))}
    </div>
);

export default ProductList;