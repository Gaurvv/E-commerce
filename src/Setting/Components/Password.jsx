import React, { useRef, useState } from "react";
import InputDetails from "../../Components/Modal/InputDetails";
import OrangeButton from "../../Components/OrangeButton";
import changeUserPassword from "../../Components/API/Auth/changePasswordApi";

const Password = () => {
  const prevPasswordRef = useRef();
  const currentPasswordRef = useRef();
  const [error, setError] = useState("");

  const handleUpdate = () => {
    const oldPass = prevPasswordRef.current?.value.trim();
    const newPass = currentPasswordRef.current?.value.trim();

    setError("");

    if (!oldPass || !newPass) {
      setError("Both fields are required");
      return;
    }

    if (oldPass === newPass) {
      setError("New password must be different from old password");
      return;
    }

    // Pass keys EXACTLY as backend expects
    const updatedData = {
      currentPassword: oldPass,
      newPassword: newPass,
    };

    changeUserPassword(updatedData, setError);
  };

  return (
    <div className="border bg-slate-100 font-medium flex p-6 m-3 md:mx-10 rounded-md border-gray-300 shadow-lg shadow-gray-700/50 gap-8 hover:cursor-pointer hover:border-gray-400 hover:shadow-black/50 hover:bg-slate-50">
      <div className="w-full md:w-[45%] px-3 space-y-2">
        <div className="text-gray-700 font-bold text-xl italic">Change Password</div>

        <div>
          <InputDetails
            errormessage="Please provide old password"
            label="Old Password"
            placeholder="Enter your Old Password"
            ref={prevPasswordRef}
            type="password"
          />
          <InputDetails
            errormessage="Please provide a valid new password"
            label="New Password"
            placeholder="Enter your New Password"
            ref={currentPasswordRef}
            type="password"
          />
        </div>

        {error && (
          <div className="text-red-600 font-semibold text-sm mt-1">{error}</div>
        )}

        <div>
          <OrangeButton title="Update" onClick={handleUpdate} />
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center flex-1 gap-3">
        <div className="text-gray-700 font-bold text-xl italic text-center">
          Change Password
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
