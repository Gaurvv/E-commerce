import React, { useRef, useState } from "react";
import InputDetails from "../../../Modal/InputDetails";
import OrangeButton from "../../../OrangeButton";

const ContactUser = ({ userDetail, setUserDetail, setStage }) => {
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const emailRef = useRef();

  const [error, setError] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleProceed = () => {
    const name = nameRef.current?.value.trim();
    const contact = contactNumberRef.current?.value.trim();
    const email = emailRef.current?.value.trim();

    if (!name) {
      setError(1);
      setErrorMessage("Please enter a valid Name");
      return;
    } else if (!email) {
      setError(2);
      setErrorMessage("Please enter a valid Email");
      return;
    } else if (!contact) {
      setError(3);
      setErrorMessage("Please enter a valid Contact Number");
      return;
    }

    // Success path
    setError(0);
    setErrorMessage("");
    setUserDetail({
      userName: name,
      contactNumber: contact,
      email: email,
      password: "",
      city: "",
      street: "",
      deliveryDescription: "",
    });
    setStage(2);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-12 space-y-6 px-6 py-8 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Info</h2>

      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <InputDetails
            label="Name"
            placeholder="Enter your name"
            ref={nameRef}
            err={error === 1}
            errormessage={error === 1 ? errorMessage : ""}
          />
        </div>
        <div className="flex flex-col gap-1">
          <InputDetails
            label="Email"
            placeholder="Enter your email"
            ref={emailRef}
            err={error === 2}
            errormessage={error === 2 ? errorMessage : ""}
          />
        </div>
        <div className="flex flex-col gap-1">
          <InputDetails
            label="Contact Number"
            placeholder="Enter your number"
            ref={contactNumberRef}
            err={error === 3}
            errormessage={error === 3 ? errorMessage : ""}
          />
        </div>
      </div>

      <div className="pt-4 flex justify-center">
        <OrangeButton title="Proceed" onClick={handleProceed} />
      </div>
    </div>
  );
};

export default ContactUser;
