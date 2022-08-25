import { createSlice } from '@reduxjs/toolkit'
export interface productDetails {
    name: string,
    price: number,
    image: any,
    details: string,
    quantity: number,
    url: string,
}

interface store {
    T: boolean,
    cart: productDetails[]
}

const store: store = {
    T: false, // false: refers changes LC not fetched
    cart: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: store,
    reducers: {
        addProduct: (state, action) => {
            state.cart.push(action.payload)
            state.T = true
        },
        removeProduct: (state, action) => {
            const { payload } = action
            state.T = true
            let index: number = -1;
            [...state.cart].forEach((product: productDetails, i: number) => {
                if (product.name === payload) {
                    index = i
                }
            })

            state.cart.splice(index, 1)
        },
        persist: (state, actions) => {
            const { T, cart } = state;

            if (typeof window !== undefined) {
                if (!T && cart.length == 0) {
                    state.cart = actions.payload
                }
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, persist } = counterSlice.actions

export default counterSlice.reducer