export default function ProductCard({ product }) {
   
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 hover:scale-105 transition transform">
            <img
                src={`/products/${product.image}`} 
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-teal-600 font-bold mt-2">₹{product.price}</p>
        </div>
    );
}
