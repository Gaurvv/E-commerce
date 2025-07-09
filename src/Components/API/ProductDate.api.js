const ProductDataApi=async(setProductData) =>{
    const request = await fetch("https://dummyjson.com/recipes");
    const response =  await request.json();


    if(request.status == 200){
        setProductData(response.recipes);
    }

   
};
export default ProductDataApi;