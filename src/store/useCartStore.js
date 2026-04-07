import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(

    persist((set, get) => ({
        cart: [],
        owner: "haseeb",

        addProductToCart: (product) => {
            try {
                if (!product || !product.id) {
                    throw new Error("Invalid Product Data")
                }
                let updatedCart = get().cart

                const existingProduct = updatedCart.find(p => p.id === product.id)

                if (existingProduct) {
                    const qty = Number(product.quantity) || 1
                    updatedCart = updatedCart.map(p => p.id === product.id ? { ...p, quantity: Number(p.quantity) + qty } : p)
                } else {
                    updatedCart = [...updatedCart, { ...product, isAvailable: true }]
                }

                set({ cart: updatedCart })
                return {
                    success: true,
                    msg: `Product ${product.name} x ${product.quantity} added to cart`
                }

            } catch (error) {
                return {
                    success: false,
                    msg: error.message || "Something went wrong"
                }
            }

        },

        removeProduct: (id) => {
            const updatedCart = get().cart.filter(product => product.id !== id)
            set({ cart: updatedCart })

            toast.success("Product Removed from cart")
        },

        getTotal: () => {
            return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0)
        },
        clearCart: () => set({ cart: [] })
    }), {
        name: "cart-storage",
        partialize: (state) => ({ cart: state.cart }),
        version: 2,
        migrate: (persistedState, version) => {

            if (!persistedState) {
                return { cart: [] }
            }

            if (version === 1) {
                return {
                    ...persistedState, cart: persistedState.cart.map(product => ({
                        ...product,
                        isAvailable: product.isAvailable ?? true
                    }))
                }
            }
            return persistedState
        }
    }))

export default useCartStore