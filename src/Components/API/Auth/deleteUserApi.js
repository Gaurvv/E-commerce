import SecureFetch from "./ApiConfiguration";
import mainEndPoint from "./mainEndPoint";

const deleteUserAccount = async (setError, onSuccess) => {
  try {
    const request = await SecureFetch(
      mainEndPoint + "delete",  // EXACT backend path
      "DELETE",
      {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    );

    if (request.ok) {
      alert("Account deleted successfully!");
      // Optionally clear token and user details
      localStorage.removeItem("token");
      localStorage.removeItem("userDetail");

      if (onSuccess && typeof onSuccess === "function") {
        onSuccess();
      }
    } else {
      const response = await request.json();
      setError(response.message || "Failed to delete account");
      console.error("Delete account failed:", response);
    }
  } catch (error) {
    setError("Server error: " + error.message);
    console.error("Error deleting account:", error);
  }
};

export default deleteUserAccount;
