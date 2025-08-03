import React from "react";
import NavBar from "../Components/Navbar/NavBar";
import General from "./Components/General";
import Location from "./Components/Location";
import Password from "./Components/Password";
import DeleteAccount from "./Components/DeleteAccount";

const Setting = () => {
  return (
    <div className="p-2 flex flex-col h-[100vh]">
      <NavBar />
      <div className=" flex flex-col my-4 gap-4">
        <General />
        <Location />
        <Password />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Setting;
