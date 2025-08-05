import React from "react";

const AddCategory = ({ setProductDetail, productDetail }) => {
  const handleCategoryChange = (e) => {
    setProductDetail({
      ...productDetail,
      category: e.target.value,
    });
  };

  return (
    <div className="flex my-3 gap-3">
      <div className="font-medium text-sm text-gray-500">Category:</div>
      <select
        className="border rounded-md p-1 text-xs"
        value={productDetail.category || ""}
        onChange={handleCategoryChange}
      >
        <option value="">Select Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Phones">Phones</option>
        <option value="Laptops">Laptops</option>
      </select>
    </div>
  );
};

export default AddCategory;
