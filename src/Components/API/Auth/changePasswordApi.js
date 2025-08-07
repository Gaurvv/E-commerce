import SecureFetch from "./ApiConfiguration";
import mainEndPoint from "./mainEndPoint";

const changeuserPassword = async (updatedData, setError) => {
  try {
    const request = await SecureFetch(
      mainEndPoint+"/auth/password", 
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      updatedData
    );

    if (request.status === 200) {
      alert("Password Changed!");
      console.log("Password change success");
    } else if (request.status === 502) {
      setError("Old password is incorrect");
    } else {
      setError("Something went wrong. Try again.");
      console.log("Password not changed");
    }
  } catch (error) {
    setError("Server error: " + error.message);
    console.error("Error updating password:", error);
  }
};

export default changeuserPassword;
