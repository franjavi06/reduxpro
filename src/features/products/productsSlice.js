import { apiSlice } from "../api/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => '/products',
            providesTags: ['Products']
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Products']
        }),
        updateProduct: builder.mutation({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PATCH',
                body: product
            }),
            invalidatesTags: ['Products']
        }),
        deleteProduct: builder.mutation({
            query: ({ id }) => ({
                url: `/products/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Products']
        }),
    })
})

export const {
    useGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsApiSlice