import SecureFetch from "./ApiConfiguration";

const updateduserData = async (updatedData) => {
  try {
    
    const request = await SecureFetch(
      mainEndPoint + "/user/user",  
      "PATCH",                                
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,  
      },
      updatedData
    );

    const response = await request.json();

    if (request.ok) {
      
      localStorage.setItem("userDetail", JSON.stringify(response.user));
      alert("User updated successfully!");
    } else {
      console.error("Update failed:", response);
      alert(response.message || "Update failed");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    alert("Error updating user, check console");
  }
};

export default updateduserData;
