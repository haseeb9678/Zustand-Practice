import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Form from './pages/Form'
import ZordForm from './pages/ZordForm'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path='form' element={<Form />} />
        <Route path='zord-form' element={<ZordForm />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App