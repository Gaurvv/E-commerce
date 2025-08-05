import React, { useState } from "react";
import OrangeButton from "../OrangeButton";

const AddFeature = ({ productDetail, setProductDetail }) => {
  const [featureInput, setFeatureInput] = useState("");

  const handleAddFeature = () => {
    const newFeature = featureInput.trim();
    if (!newFeature) return;

    const currentFeatures = productDetail.features || [];

  
    if (currentFeatures.includes(newFeature)) return;

    setProductDetail({
      ...productDetail,
      features: [...currentFeatures, newFeature],
    });

    setFeatureInput("");
  };

  return (
    <div className="my-2 space-y-1">
      <div className="text-sm font-medium text-gray-700">Features:</div>

      {(productDetail.features?.length > 0) && (
        <div className="text-sm text-gray-800">
          {productDetail.features.map((item, index) => (
            <span key={index}>
              {item}
              {index !== productDetail.features.length - 1 && ", "}
            </span>
          ))}
        </div>
      )}

      <input
        type="text"
        value={featureInput}
        onChange={(e) => setFeatureInput(e.target.value)}
        placeholder="Enter a feature"
        className="border outline-none rounded-md p-1 w-full"
      />

      <OrangeButton title="Add +" onClick={handleAddFeature} />
    </div>
  );
};

export default AddFeature;
