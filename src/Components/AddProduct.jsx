import React, { useState, useEffect } from "react";
import { FiShoppingCart, FiEdit, FiTrash2 } from "react-icons/fi";

const AddProduct = () => {
  const [productDetail, setProductDetail] = useState({
    productName: "",
    price: "",
    rating: "",
    description: "",
    popularity: "",
    image: "",
    features: "",
    category: "",
  });

  const [existingProducts, setExistingProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch existing products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setFetchLoading(true);
      const res = await fetch("http://localhost:3000/product");
      const data = await res.json();
      
      if (res.ok) {
        setExistingProducts(data.data || []);
      } else {
        console.error("Failed to fetch products:", data.message);
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productDetail.productName.trim()) {
      setError("Product name is required!");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
   
      const processedData = {
        ...productDetail,
        productName: productDetail.productName.trim(), 
        price: productDetail.price ? Number(productDetail.price) : undefined,
        rating: productDetail.rating ? Number(productDetail.rating) : undefined,
        popularity: productDetail.popularity ? Number(productDetail.popularity) : undefined,
        features: productDetail.features 
          ? productDetail.features.split(',').map(f => f.trim()).filter(f => f)
          : [],
      };

      // Remove empty fields
      Object.keys(processedData).forEach(key => {
        if (processedData[key] === "" || processedData[key] === undefined) {
          delete processedData[key];
        }
      });

      console.log("Submitting product data:", processedData); // Debug log

      const url = editingProduct 
        ? `http://localhost:3000/product/${editingProduct._id}`
        : "http://localhost:3000/product";
      
      const method = editingProduct ? "PATCH" : "POST";

      const res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedData),
      });

      const data = await res.json();
      console.log("Server response:", data); // Debug log

      if (res.status === 409) {
        // Show more detailed error message
        const existingNames = existingProducts.map(p => p.productName);
        setError(`Product name "${processedData.productName}" already exists! Existing products: ${existingNames.join(', ')}`);
      } else if (res.ok) {
        setSuccess(true);
        setProductDetail({
          productName: "",
          price: "",
          rating: "",
          description: "",
          popularity: "",
          image: "",
          features: "",
          category: "",
        });
        setEditingProduct(null);
        fetchProducts(); // Refresh the product list
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(data.message || `Failed to ${editingProduct ? 'update' : 'add'} product`);
      }
    } catch (err) {
      setError("Internal server error: " + err.message);
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setProductDetail({
      productName: product.productName || "",
      price: product.price?.toString() || "",
      rating: product.rating?.toString() || "",
      description: product.description || "",
      popularity: product.popularity?.toString() || "",
      image: product.image || "",
      features: Array.isArray(product.features) ? product.features.join(', ') : "",
      category: product.category || "",
    });
    setError("");
    setSuccess(false);
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/product/${productId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchProducts(); // Refresh the product list
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        const data = await res.json();
        setError(data.message || "Failed to delete product");
      }
    } catch (err) {
      setError("Error deleting product");
      console.error("Delete error:", err);
    }
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setProductDetail({
      productName: "",
      price: "",
      rating: "",
      description: "",
      popularity: "",
      image: "",
      features: "",
      category: "",
    });
    setError("");
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-700 text-center mb-8">
          Product Management
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Existing Products */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-orange-700 mb-4">
              Existing Products ({existingProducts.length})
            </h2>
            
            {fetchLoading ? (
              <div className="text-center py-8">
                <div className="text-lg text-orange-600">Loading products...</div>
              </div>
            ) : existingProducts.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-lg text-gray-500">No products found</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {existingProducts.map((product) => (
                  <div
                    key={product._id}
                    className="bg-gradient-to-b from-orange-600 to-orange-400 rounded-2xl shadow-2xl overflow-hidden transition hover:scale-[1.02]"
                    style={{ height: '440px' }}
                  >
                    <img 
                      src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'} 
                      alt={product.productName} 
                      className="w-full h-44 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                      }}
                    />
                    <div className="p-4 flex flex-col justify-between h-[calc(100%-176px)]">
                      <div>
                        <h3 className="text-white text-lg font-semibold mb-1 font-serif">
                          {product.productName}
                        </h3>
                        <p className="text-white text-sm font-serif mb-1 line-clamp-2">
                          {product.description || 'No description'}
                        </p>
                        <div className="text-white text-sm font-serif space-y-1">
                          {product.price && <p>Price: ${product.price}</p>}
                          {product.rating && <p>Rating: {product.rating}⭐</p>}
                          <p>Category: {product.category || 'Uncategorized'}</p>
                          {product.popularity && <p>Popularity: {product.popularity}</p>}
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={() => handleEdit(product)}
                          className="flex-1 flex items-center justify-center gap-1 rounded-lg h-8 text-white font-bold text-sm transition-transform hover:scale-105 bg-blue-500"
                        >
                          <FiEdit className="text-sm" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="flex-1 flex items-center justify-center gap-1 rounded-lg h-8 text-white font-bold text-sm transition-transform hover:scale-105 bg-red-500"
                        >
                          <FiTrash2 className="text-sm" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Add/Edit Product Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-orange-200">
                <h2 className="text-2xl font-bold mb-4 text-orange-700">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>

                {error && (
                  <div className="mb-3 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
                    {error}
                  </div>
                )}
                {success && (
                  <div className="mb-3 p-3 bg-green-100 border border-green-300 text-green-700 rounded">
                    {editingProduct ? 'Product updated successfully!' : 'Product added successfully!'}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      name="productName"
                      placeholder="Enter product name"
                      value={productDetail.productName}
                      onChange={handleChange}
                      className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price ($)
                      </label>
                      <input
                        type="number"
                        name="price"
                        placeholder="0.00"
                        step="0.01"
                        min="0"
                        value={productDetail.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rating (1-5)
                      </label>
                      <input
                        type="number"
                        name="rating"
                        placeholder="0"
                        step="0.1"
                        min="0"
                        max="5"
                        value={productDetail.rating}
                        onChange={handleChange}
                        className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      name="description"
                      placeholder="Enter product description"
                      value={productDetail.description}
                      onChange={handleChange}
                      className="w-full p-2 border border-orange-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Popularity Score
                    </label>
                    <input
                      type="number"
                      name="popularity"
                      placeholder="0"
                      min="0"
                      value={productDetail.popularity}
                      onChange={handleChange}
                      className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Image URL
                    </label>
                    <input
                      type="url"
                      name="image"
                      placeholder="https://example.com/image.jpg"
                      value={productDetail.image}
                      onChange={handleChange}
                      className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Features (comma-separated)
                    </label>
                    <textarea
                      name="features"
                      placeholder="Feature 1, Feature 2, Feature 3"
                      value={productDetail.features}
                      onChange={handleChange}
                      className="w-full p-2 border border-orange-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                      rows={2}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      placeholder="Enter category"
                      value={productDetail.category}
                      onChange={handleChange}
                      className="w-full p-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white py-2 rounded font-semibold transition"
                    >
                      {loading ? "Saving..." : editingProduct ? "Update Product" : "Add Product"}
                    </button>
                    
                    {editingProduct && (
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="px-4 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded font-semibold transition"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;