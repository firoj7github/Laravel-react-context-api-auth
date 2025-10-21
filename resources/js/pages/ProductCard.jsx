import React from 'react'

function ProductCard() {
  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-xl font-bold mb-4">All Products</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">#</th>
            <th className="border px-4 py-2 text-left">Image</th>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Price</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">
                <img
                  src={product.image || "https://via.placeholder.com/80"}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
              </td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                //   onClick={() => onEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                //   onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          
        </tbody>
      </table>

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => onEdit(null)} // null মানে নতুন প্রোডাক্ট add
      >
        ➕ Add Product
      </button>
    </div>
  )
}

export default ProductCard