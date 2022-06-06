import React, {useEffect} from 'react'
import { 
    useGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation 
} from "./productsSlice";

const ProductList = () => {

    const {
        data,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetProductsQuery()

    useEffect(() => {
      console.log(data);
      console.log(isLoading);
      console.log(isSuccess);
      console.log(error);
      console.log("---------");
    }, [data])

    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        content = data.map( product => {
            return (
                <div key={product.id}>{product.name}</div>
            )
        })
    } else if (isError) {
        content = <p>{error}</p>
    }
    

  return (
    <div>{content}</div>
  )
}

export default ProductList