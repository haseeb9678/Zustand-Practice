
import { LuX } from 'react-icons/lu'
import { useCart } from '../hooks/useCart'

const CartProduct = ({ product }) => {
    const { removeProduct } = useCart()
    return (
        <div className='border p-3 border-gray-200 rounded-md bg-gray-50 shadow
        flex items-center gap-2 w-10/12 mx-auto lg:w-8/12
        '>
            <span>Id: {product.id}</span>
            <span className='font-semibold text-2xl'>{product.name}</span>
            <span>Rs.{product.price}</span>
            <span>Quantity: {product.quantity}</span>
            <button
                onClick={() => removeProduct(product.id)}
                className='ml-auto bg-red-600 text-white p-2 rounded-md flex items-center justify-center gap-1'
            >Remove
                <LuX size={16} />
            </button>
        </div>
    )
}

export default CartProduct