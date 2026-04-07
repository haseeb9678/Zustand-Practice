
import CartProduct from '../components/CartProduct';
import { useNavigate } from 'react-router-dom';
import { LuPlus, LuShoppingCart, LuX } from 'react-icons/lu';
import { useCart } from '../hooks/useCart';

const Cart = () => {
    const { cart, clearCart, getTotal } = useCart()
    const navigate = useNavigate()

    return (
        <div className='flex flex-col gap-4'>
            <h2
                className='font-bold text-2xl flex items-center gap-2'
            >Cart
                <LuShoppingCart size={23} />
            </h2>
            {
                cart?.length > 0 ? <div className='flex flex-col gap-4'>
                    {
                        cart.map(product => (
                            <CartProduct key={product.id} product={product} />
                        ))
                    }
                </div> : <div>No items in cart.</div>
            }
            <div>
                Total Checkout Price: <span className='font-semibold text-xl'>Rs.{getTotal().toLocaleString()}</span>
            </div>
            <div className='flex justify-center gap-2'>
                <button
                    onClick={() => navigate("/products")}
                    className='bg-green-600 text-white p-2 rounded-md flex items-center justify-center gap-1'
                >Add Product
                    <LuPlus size={16} />
                </button>
                <button
                    onClick={clearCart}
                    className='bg-yellow-600 text-white p-2 rounded-md flex items-center justify-center gap-1'
                >Clear cart
                    <LuX size={16} />
                </button>
            </div>
        </div>
    )
}

export default Cart