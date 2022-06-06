import { apiSlice } from "../api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['Users']
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        updateUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: 'PATCH',
                body: user
            }),
            invalidatesTags: ['Users']
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/users/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Users']
        }),
    })
})

export const {
    useGetUsersQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usersApiSlice