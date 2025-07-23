import React from 'react';
import OrangeButton from '../OrangeButton';

const InputDetails = ({ err, placeholder, ref, title, ...props }) => {
  return (
    <div {...props} className="  flex justify-center px-4 md:px-8">
      <div className=" rounded-2xl  flex flex-col w-full max-w-sm md:max-w-md">
        <p className="text-sm sm:text-base">{title}</p>
        <input
          ref={ref}
          className="  rounded-2xl  border h-7 p-2 mt-2 text-sm sm:text-base"
          type="text"
          placeholder={placeholder}
        />
        <div className="text-red-500 text-xs sm:text-sm mt-1">
          {err && 'Invalid Details'}
        </div>
      </div>
    </div>
  );
};

export default InputDetails;
