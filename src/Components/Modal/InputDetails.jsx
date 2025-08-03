import React from 'react';

const InputDetails = React.forwardRef(
  ({ err, errormessage, placeholder, title, ...props }, ref) => {
    return (
      <div className="flex justify-center px-4 md:px-8" {...props}>
        <div className="flex flex-col w-full max-w-sm md:max-w-md">
          {title && (
            <label className="text-sm sm:text-base mb-1">{title}</label>
          )}
          <input
            ref={ref}
            type="text"
            placeholder={placeholder}
            className={`rounded-2xl border h-7 p-2 text-sm sm:text-base ${
              err ? "border-red-500" : "border-gray-300"
            }`}
          />
          {err && (
            <p className="text-red-500 text-xs sm:text-sm mt-1">
              {errormessage || "Please add valid details"}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default InputDetails;
