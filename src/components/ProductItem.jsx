const ProductItem = ({ product }) => {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                    {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through mr-2">
              ${product.oldPrice.toFixed(2)}
            </span>
                    )}
                    <p className={`text-xl font-bold ${product.isSale ? 'text-red-600' : 'text-gray-900'}`}>
                        ${product.price.toFixed(2)}
                    </p>
                </div>
                <div className="flex space-x-2">
                    {product.isSale && (
                        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              Sale
            </span>
                    )}
                    {product.isNew && (
                        <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
                    )}
                </div>
            </div>
        </div>
    );
}
export default ProductItem;