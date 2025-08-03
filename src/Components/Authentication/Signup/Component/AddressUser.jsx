import React, { useRef, useState } from "react";
import InputDetails from "../../../Modal/InputDetails";
import OrangeButton from "../../../OrangeButton";

const Address = ({ userDetail, setUserDetail, setStage }) => {
  const cityRef = useRef();
  const stateRef = useRef();
  const deliverydescRef = useRef();

  const [error, setError] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleProceed = () => {
    const city = cityRef.current?.value.trim();
    const state = stateRef.current?.value.trim();
    const desc = deliverydescRef.current?.value.trim();

    if (!city || city.length < 2) {
      setError(1);
      setErrorMessage("City name must be at least 2 characters");
      return;
    } else if (!state) {
      setError(2);
      setErrorMessage("Please enter a valid State");
      return;
    } else if (!desc) {
      setError(3);
      setErrorMessage("Delivery description cannot be empty");
      return;
    }

    setError(0);
    setErrorMessage("");
    setUserDetail((prev) => ({
      ...prev,
      city,
      street: state,
      deliveryDescription: desc,
    }));
    setStage(3);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-8">
      <InputDetails
        label="City"
        placeholder="Enter your City"
        ref={cityRef}
        err={error === 1}
        errormessage={error === 1 ? errorMessage : ""}
      />
      <InputDetails
        label="State"
        placeholder="Enter your state"
        ref={stateRef}
        err={error === 2}
        errormessage={error === 2 ? errorMessage : ""}
      />
      <InputDetails
        label="Delivery Description"
        placeholder="Write delivery description"
        ref={deliverydescRef}
        err={error === 3}
        errormessage={error === 3 ? errorMessage : ""}
      />
      <OrangeButton title="Proceed" onClick={handleProceed} />
    </div>
  );
};

export default Address;
