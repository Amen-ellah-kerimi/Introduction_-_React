import ProductItem from "./ProductItem.jsx";

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.length === 0 ? (
        <div className="col-span-full text-center text-gray-500">No products found.</div>
      ) : (
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductGrid; 