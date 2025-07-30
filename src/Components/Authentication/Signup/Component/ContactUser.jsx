import React, { useRef, useState } from "react";
import InputDetails from "../../../Modal/InputDetails";
import OrangeButton from "../../../OrangeButton";

const ContactUser = ({ userDetail, setUserDetail, setStage }) => {
  const [error, setError] = useState(0);
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const emailRef = useRef();

  const handelData = () => {
    if (nameRef.current?.value == "" || nameRef.current == null) {
      setError(1);
    } else if (
      contactNumberRef.current?.value == "" ||
      contactNumberRef.current == null
    ) {
      setError(2);
    } else if (emailRef.current?.value == "" || emailRef.current == null) {
      setError(3);
    } else {
      setError(0);
      setUserDetail({
        userName: nameRef.current.value,
        contactNumber: contactNumberRef.current.value,
        email: emailRef.current.value,
        password: "",
        city: "",
        street: "",
        deliveryDescription: "",
      });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-12 space-y-6 px-6 py-8 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Info</h2>

      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <InputDetails
            label={"Name"}
            placeholder={"Enter your name"}
            ref={nameRef}
          />
        </div>
        <div className="flex flex-col gap-1">
          <InputDetails
            label={"Email"}
            placeholder={"Enter your email"}
            ref={emailRef}
          />
        </div>
        <div className="flex flex-col gap-1">
          <InputDetails
            label={"Contact Number"}
            placeholder={"Enter your number"}
            ref={contactNumberRef}
          />
        </div>
      </div>

      <div className="pt-4 flex justify-center">
        <OrangeButton title={"Proceed"} onClick={() => handelData()} />
      </div>
    </div>
  );
};

export default ContactUser;
