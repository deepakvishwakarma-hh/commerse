import { createSlice } from '@reduxjs/toolkit'
export interface productDetails {
    name: string,
    price: number,
    image: any,
    details: string,
    quantity: number,
}


const store: productDetails[] = []



export const counterSlice = createSlice({
    name: 'counter',
    initialState: store,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        removeProduct: (state, action) => {
            const { payload } = action
            let index: number = -1;
            [...state].forEach((product: productDetails, i: number) => {
                if (product.name === payload) {
                    index = i
                }
            })

            state.splice(index, 1)
        }

    },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = counterSlice.actions

export default counterSlice.reducer