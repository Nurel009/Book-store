import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookSlice = createApi({
    reducerPath:"book",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    endpoints:(build)=>({
        getAllBook:build.query({
            query:()=>`book`,
            providesTags:['book']
        }),
    })
})

export const {useGetAllBookQuery} = bookSlice