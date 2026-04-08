
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const items = [
        {
            id: 1,
            title: "Products",
            path: "/products"
        },
        {
            id: 2,
            title: "Cart",
            path: "/cart"
        },
        {
            id: 2,
            title: "Hook Form",
            path: "/form"
        },
        {
            id: 2,
            title: "Hook Zord Form",
            path: "/zord-form"
        },

    ]
    return (
        <div className='flex flex-col gap-3  h-full justify-center items-center'>
            {
                items.map(item => (
                    <button
                        className='min-w-70 h-10
                        cursor-pointer hover:bg-black/80
                        bg-black text-white rounded-md'
                        onClick={() => navigate(item.path)}
                    >
                        {item.title}
                    </button>
                ))
            }
        </div>
    )
}

export default Home