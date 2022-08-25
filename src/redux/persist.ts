import store from './index'
import { useAppDispatch, useAppSelector } from './index';
import { persist } from './cart';

const storage_name = 'persisted-cart-products'

export function subscriberCallback() {
    const { T } = store.getState().cart;
    if (T) {
        const storeGoingToBePersist = JSON.stringify(store.getState().cart.cart)
        localStorage.setItem(storage_name, storeGoingToBePersist)
    }

}


const usePersist = () => {

    const dispatch = useAppDispatch()
    const { T, cart } = useAppSelector(store => store.cart)

    const effectStore = () => {
        if (!T && cart.length == 0)
            if (typeof Storage !== undefined)
                if (localStorage.getItem(storage_name)) {
                    setTimeout(() => {
                        dispatch(persist(JSON.parse(localStorage.getItem(storage_name) as any)))
                    }, 1000)

                }
    }
    return { effectStore }
}

export default usePersist