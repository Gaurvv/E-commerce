import SecureFetch from "./ApiConfiguration";
import mainEndPoint from "./mainEndPoint";

const loginApi = async (userInfo, navigate, setErr) => {
  try {
    const request = await SecureFetch(
      mainEndPoint + "user/login",
      "POST",
      { "Content-Type": "application/json" },
      userInfo
    );

    const response = await request.json();
    console.log("Login API Full Response:", response);

    if (request.status === 200) {
      const userData = response.response;

      // Save token
      localStorage.setItem("token", userData.token);
      localStorage.setItem("userDetail", JSON.stringify(userData));

      // Save role (adjust if nested inside user object)
      const role = userData.role || userData.user?.role;
      if (role) {
        localStorage.setItem("role", role);
      } else {
        localStorage.removeItem("role");
      }

      navigate("/", { replace: true });
    } else {
      setErr(3);
    }
  } catch (error) {
    console.error("Login error:", error);
    setErr(3);
  }
};

export default loginApi;
