import React, { useEffect, useRef } from "react";
import InputDetails from "../../Components/Modal/InputDetails";
import OrangeButton from "../../Components/OrangeButton";
import updateduserData from "../../Components/API/Auth/updateUserApi";

const General = () => {
  const data = JSON.parse(localStorage.getItem("userDetail")) || {};

  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.value = data.userName || "";
    if (emailRef.current) emailRef.current.value = data.email || "";
    if (contactRef.current) contactRef.current.value = data.contactNumber || "";
  }, [data]);

  const handleUpdate = async () => {
    const updatedData = {
      userName: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      contactNumber: contactRef.current.value.trim(),
    };

    if (!updatedData.userName || !updatedData.email || !updatedData.contactNumber) {
      alert("All fields are required!");
      return;
    }

    console.log("Sending updated data:", updatedData);
    await updateduserData(updatedData);
  };

  return (
    <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className="w-full md:w-[45%] px-3 space-y-2">
        <div className="text-gray-700 font-bold text-xl italic">General Information</div>
        <div>
          <InputDetails
            err={nameRef.current?.value === ""}
            errormessage={"Please provide a valid name"}
            label={"Name"}
            placeholder={"Enter your Name"}
            ref={nameRef}
          />
          <InputDetails
            err={emailRef.current?.value === ""}
            errormessage={"Please provide a valid email"}
            label={"Email"}
            placeholder={"Enter your Email"}
            ref={emailRef}
          />
          <InputDetails
            err={contactRef.current?.value === ""}
            errormessage={"Please provide a valid phone number"}
            label={"Contact Number"}
            placeholder={"Enter your Contact Number"}
            ref={contactRef}
          />
        </div>
        <div>
          <OrangeButton title={"Update"} onClick={handleUpdate} />
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center flex-1 gap-3">
        <div className="text-gray-700 font-bold text-xl italic text-center">General Information</div>
        <p className="text-gray-500 font-medium lg:text-lg text-justify">
          Update your name, contact number, and email address from this section to keep your profile information up to date.
        </p>
      </div>
    </div>
  );
};

export default General;
