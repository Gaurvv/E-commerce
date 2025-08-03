import SecureFetch from "./ApiConfiguration"

const updateUserApi = async(updatedData) =>{
    const request = await SecureFetch(
        "http://localhost:3000/user/userDetails",
      "POST",
      {
            
      }
    )
}