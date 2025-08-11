import SecureFetch from "./ApiConfiguration";
import mainEndPoint from "./mainEndPoint";

const loginApi = async (userInfo, navigate, setErr) => {
  try {
    const request = await SecureFetch(
      mainEndPoint + "user/login",
      "POST", // Changed from "Post" to "POST"
      {
        "Content-Type": "application/json", // Fixed capitalization
      },
      userInfo
    );
    
    const response = await request.json();
    console.log("Login API Response:", response);
    
    if (request.status === 200) {
      console.log("Login successful:", response);
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
      // Show error for invalid credentials
      setErr(3);
    }
  } catch (error) {
    console.error("Login error:", error);
    setErr(3); // Show error for network/server issues
  }
};

export default loginApi;