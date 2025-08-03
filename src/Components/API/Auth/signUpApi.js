import SecureFetch from "./ApiConfiguration";

const signupApi = async (userDetail, navigate, setUserDetail, setStage, setErrorMessage) => {
  try {
    const request = await SecureFetch(
      "http://localhost:3000/user/signup",
      "POST",
      {
        "Content-Type": "application/json",
      },
      userDetail
    );
    
    const response = await request.json();
    console.log("API Response:", response);
    
    if (request.status === 200) {
      console.log("Signup successful:", response);
      // Store token from response.response.token (based on your backend structure)
      localStorage.setItem("token", response.response.token);
      localStorage.setItem("userDetail", JSON.stringify(response.response));
      
      // Navigate to the root path which should load Hoome -> App
      navigate("/", { replace: true });
      
      // Force a page reload to ensure proper token check
      setTimeout(() => {
        window.location.reload();
      }, 100);
      
    } else {
      // Show error message from server
      setErrorMessage(response.message || "Signup failed");
      // Reset form
      setUserDetail({
        userName: "",
        contactNumber: "",
        email: "",
        password: "",
        city: "",
        street: "",
        deliveryDescription: "",
      });
      setStage(1); // Reset to first stage
    }
  } catch (error) {
    console.error("Signup error:", error);
    setErrorMessage("Network error occurred. Please try again.");
  }
};

export default signupApi;