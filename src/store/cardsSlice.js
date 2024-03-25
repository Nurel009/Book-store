import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardsSlice = createApi({
    reducerPath:"сards",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000"}),
    endpoints:(build)=>({
        getAllCards:build.query({
            query:()=>`cards`,
            providesTags:['cards']
        }),
        getProduct: build.query({
            query:(id)=> `cards/${id}`
        }),
        addProduct:build.mutation({
            query:(cards)=>({
                url:"cards",
                method:"POST",
                body:cards
            }),
            invalidatesTags:['cards']
        }),
        registerUser:build.mutation({
            query:(user)=>({
                url:"register",
                method:"POST",
                body:user
            })
        }),
        loginUser:build.mutation({
            query:(user)=>({
                url:"login",
                method:"POST",
                body:user
            })
        })
    })
})

export const {useGetAllCardsQuery, useGetProductQuery, useRegisterUserMutation, useLoginUserMutation} = cardsSlice