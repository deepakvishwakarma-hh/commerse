import { createContext, useContext, useState, type ReactNode } from "react";

type product = {
    name: string,
    briefDetail: string,
    varient: any,
    price: number,
    url: string,
    size?: string,
    quantity: number,
}

type contextType = {
    cart: {
        products: product[],
        T: boolean
    },
    product: {
        quantity: number,
        varientIndex: number,
        varient: any,
        size: string | undefined,
    }
    reducers: undefined | {
        cart: {
            [key: string]: (action: { type: string, payload: any }) => void;
        }
        product: {
            [key: string]: (action: { type: string, payload: any }) => void;
        },
    }
}
type Props = {
    children: ReactNode;
};

const contextDefaultValues: contextType = {
    cart: {
        products: [],
        T: false
    },
    product: {
        quantity: 1,
        varientIndex: 0,
        varient: {},
        size: undefined,
    },
    reducers: undefined
}

const Context = createContext<contextType>(contextDefaultValues);


export function _useContext() {
    return useContext(Context);
}




export default function Provider({ children }: Props) {

    const [cart, setCart] = useState<contextType['cart']>(contextDefaultValues.cart)

    const [product, setProduct] = useState<contextType['product']>(contextDefaultValues.product)

    const reducers: contextType['reducers'] = {
        product: {
            reducer: (action) => {
                setProduct((prev: any) => {
                    return { ...prev, [action.type]: action.payload }
                })
            },
        },
        cart: {
            pushProduct: (action) => {
                setCart((prev: any) => {
                    return { ...prev, products: [...prev.products, action.payload] }
                })
            },
            removeProduct: (action) => {


                const filteredArr = cart.products.filter((item: any) => item.name !== action.payload)

                setCart((prev: any) => {
                    return { ...prev, products: filteredArr }
                })
            }
        }
    }

    const value = {
        cart,
        product,
        reducers
    }
    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider>
    )
}