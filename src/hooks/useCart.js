
import { useShallow } from "zustand/shallow"
import useCartStore from "../store/useCartStore"

export const useCart = () => {
    return useCartStore(
        useShallow(
            (state) => ({
                cart: state.cart,
                addProductToCart: state.addProductToCart,
                removeProduct: state.removeProduct,
                getTotal: state.getTotal,
                clearCart: state.clearCart

            }))
    )
}