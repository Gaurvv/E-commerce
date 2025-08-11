import SecureFetch from "./ApiConfiguration";
import mainEndPoint from "./mainEndPoint";

const changeUserPassword = async (updatedData, setError) => {
  try {
    const request = await SecureFetch(
      mainEndPoint + "password",  // EXACT backend path
      "PATCH",
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      updatedData
    );

    const responseText = await request.text();

    // Some APIs might return empty body, so check if JSON parse possible
    let responseJson = {};
    try {
      responseJson = JSON.parse(responseText);
    } catch {
      // ignore parsing error
    }

    if (request.ok) {
      alert("Password Changed!");
      setError("");
    } else {
      setError(responseJson.message || "Something went wrong. Try again.");
      console.error("Password change failed:", responseJson);
    }
  } catch (error) {
    setError("Server error: " + error.message);
    console.error("Error updating password:", error);
  }
};

export default changeUserPassword;
