import React, { useEffect, useRef, useState } from "react";
import InputDetails from "../../Components/Modal/InputDetails";
import OrangeButton from "../../Components/OrangeButton";
import updateduserData from "../../Components/API/Auth/updateUserApi";

const Location = () => {
  const data = JSON.parse(localStorage.getItem("userDetail")) || {};
  const cityRef = useRef();
  const streetRef = useRef();
  const deliveryDescriptionRef = useRef();
  const [error, setError] = useState("");

  useEffect(() => {
    if (cityRef.current) cityRef.current.value = data.city || "";
    if (streetRef.current) streetRef.current.value = data.street || "";
    if (deliveryDescriptionRef.current) deliveryDescriptionRef.current.value = data.deliveryDescription || "";
  }, [data]);

  const handleUpdate = async () => {
    const updatedData = {
      city: cityRef.current.value.trim(),
      street: streetRef.current.value.trim(),
      deliveryDescription: deliveryDescriptionRef.current.value.trim(),
    };

    if (!updatedData.city || !updatedData.street || !updatedData.deliveryDescription) {
      setError("All fields are required!");
      return;
    }
    setError("");

    try {
      await updateduserData(updatedData);
      alert("Location updated successfully!");
      const updatedUserDetail = { ...data, ...updatedData };
      localStorage.setItem("userDetail", JSON.stringify(updatedUserDetail));
    } catch {
      setError("Failed to update delivery info.");
    }
  };

  return (
    <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className="w-full md:w-[45%] px-3 space-y-2">
        <div className="text-gray-700 font-bold text-xl italic">Delivery Information</div>
        <div>
          <InputDetails
            err={error && !cityRef.current?.value}
            errormessage={"Please provide a valid city"}
            label={"City"}
            placeholder={"Enter your City"}
            ref={cityRef}
          />
          <InputDetails
            err={error && !streetRef.current?.value}
            errormessage={"Please provide a valid street"}
            label={"Street"}
            placeholder={"Enter your Street"}
            ref={streetRef}
          />
          <InputDetails
            err={error && !deliveryDescriptionRef.current?.value}
            errormessage={"Please provide a valid description"}
            label={"Delivery Description"}
            placeholder={"Enter your Delivery description"}
            ref={deliveryDescriptionRef}
          />
        </div>
        {error && <p className="text-red-600 font-semibold mt-1">{error}</p>}
        <div>
          <OrangeButton title={"Update"} onClick={handleUpdate} />
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center flex-1 gap-3">
        <div className="text-gray-700 font-bold text-xl italic text-center">Delivery Information</div>
        <p className="text-gray-500 font-medium lg:text-lg text-justify">
          In this section, you can add or update your delivery details to ensure your orders reach you without any issues. Include accurate information such as your street address, city, and any specific delivery instructions or landmarks. Keeping this information up to date helps us deliver your items faster and more efficiently.
        </p>
      </div>
    </div>
  );
};

export default Location;
