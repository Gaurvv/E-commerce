    const ProductDataApi=async(setProductData) =>{
        const request = await fetch("http://localhost:3000/product");
        const response =  await request.json();
        console.log("respnse of data", response)


        if(request.status == 200){
            setProductData(response.data);
           setMainData(response.data);
        }

                    
    };
    export default ProductDataApi;