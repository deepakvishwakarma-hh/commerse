import { createContext, useContext, useState, type ReactNode, useEffect } from "react";

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
        isAnyReducerPerformed: boolean
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
        isAnyReducerPerformed: false
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
                    return { isAnyReducerPerformed: true, products: [...prev.products, action.payload] }
                })
            },
            removeProduct: (action) => {
                const filteredArr = cart.products.filter((item: any) => item.name !== action.payload)
                setCart(() => {
                    return { isAnyReducerPerformed: true, products: filteredArr }
                })
            }
        }
    }

    const value = {
        cart, product, reducers
    }

    // Effect specially for state persistant
    useEffect(() => {
        const storage_name = 'persisted-cart-products'
        // perfact condition to ger persisted state
        if (cart.products.length == 0 && !cart.isAnyReducerPerformed) {
            // validating presence of storage
            if (localStorage.getItem(storage_name)) {
                // get and store to cart>product
                const persistedProducts = JSON.parse(localStorage.getItem(storage_name) as any)
                setCart({ isAnyReducerPerformed: false, products: persistedProducts })
            }

        } else {
            // store to storage(localstorage)
            const storeGoingToBePersist = JSON.stringify(cart.products)
            localStorage.setItem(storage_name, storeGoingToBePersist)
        }

    }, [cart])

    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider>
    )
}