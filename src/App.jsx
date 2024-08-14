import './App.css'
import { ProductList } from './components/productList/ProductList'
import { Cart } from './components/cart/Cart'
import { Modal } from './components/modal/Modal'

function App() {

  return (
    <>
      <main className='product-page-container'>
        <h1 className='product-type'>Desserts</h1>
        <ProductList/>
        <Cart/>
        <Modal/>
      </main>
    </>
  )
}

export default App
