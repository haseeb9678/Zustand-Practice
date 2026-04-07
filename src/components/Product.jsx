import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuPlus, LuShoppingCart, LuX } from 'react-icons/lu'
import { toast } from 'react-toastify'
import { useCart } from '../hooks/useCart'

const Product = ({ product }) => {
    const [isAddToCart, setIsAddToCart] = useState(false)
    const [quantity, setQuantity] = useState(1)
    const { addProductToCart } = useCart()
    const navigate = useNavigate()

    const handleAdd = () => {
        if (quantity < 1) {
            toast.error("Invalid quantity")
            return
        }
        const res = addProductToCart({ ...product, quantity })
        if (!res.success) {
            toast.error(res?.msg)

        } else {
            toast.success(res?.msg)
            setIsAddToCart(false)
            navigate("/cart")
        }
    }
    return (
        <>
            <div className='border p-3 border-gray-200 rounded-md bg-gray-50 shadow
        flex items-center gap-2
        '>
                <span>Id: {product.id}</span>
                <span className='font-semibold text-2xl'>{product.name}</span>
                <span>Rs.{product.price}</span>
                <button
                    onClick={() => setIsAddToCart(true)}
                    className='bg-green-600 text-white rounded-md p-2 ml-auto flex items-center gap-1 justify-center'
                >Add to Cart
                    <LuShoppingCart size={16} />
                </button>
            </div>

            {
                isAddToCart && <div
                    onClick={() => {

                        setIsAddToCart(false)

                    }}
                    className='bg-black/60 flex items-center justify-center absolute inset-0'>
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        className='bg-white w-3/4 sm:max-w-120  p-6 rounded-md'>
                        <div className='flex flex-col gap-3'>
                            <button
                                onClick={() => setIsAddToCart(false)}
                                className='ml-auto cursor-pointer'>
                                <LuX size={24} />
                            </button>
                            <h2 className='font-semibold text-2xl'>{product.name}</h2>
                            <span className='font-semibold text-slate-600'>Rs.{product.price}/-</span>
                            <div className='flex items-center gap-2'>
                                <label className='font-semibold' htmlFor="quantity">Quantity: </label>
                                <input
                                    required
                                    min={1}
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.currentTarget.value))}
                                    className='h-10 w-full p-2 border outline-none border-gray-300 rounded-md'
                                    type="number" name="quantity" id="quantity" />
                            </div>
                            <button
                                onClick={handleAdd}
                                className='bg-green-600 text-white p-2 rounded-md mt-4 flex items-center justify-center gap-1'
                            >Add
                                <LuPlus size={16} />
                            </button>

                        </div>
                    </div>
                </div>
            }

        </>


    )
}

export default Product