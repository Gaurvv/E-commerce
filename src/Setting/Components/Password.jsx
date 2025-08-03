import React, { useRef } from "react";
import InputDetails from "../../Components/Modal/InputDetails";
import OrangeButton from "../../Components/OrangeButton";

const Password = () => {
  const token = localStorage.getItem("token");
  const prevPasswordRef = useRef();
  const currentPasswordRef = useRef();

  const handleUpdate = () => {};

  return (
    <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className=" w-full md:w-[45%] px-3 space-y-2">
        <div className="text-gray-700 font-bold text-xl italic">
          Change Password
        </div>
        <div>
          <InputDetails
            errormessage={"Please provide password"}
            label={"Password"}
            placeholder={"Enter your Old Password"}
            ref={prevPasswordRef}
          />
          <InputDetails
            errormessage={"Please provide a valid password"}
            label={"New Password"}
            placeholder={"Enter your newPassword"}
            ref={currentPasswordRef}
          />
        </div>
        <div>
          <OrangeButton title={"Update"} onClick={() => handleUpdate()} />
        </div>
      </div>
      <div className=" hidden md:flex flex-col justify-center flex-1 gap-3 ">
        <div className="text-gray-700 font-bold text-xl italic text-center ">
          Change Password{" "}
        </div>
        <p className="text-gray-500 font-medium lg:text-lg text-justify">
          Keep your account secure by updating your password regularly. Use this
          section to change your current password to a new one. Make sure your
          new password is strong and unique to protect your personal information
          and prevent unauthorized access to your account.
        </p>
      </div>
    </div>
  );
};

export default Password;
