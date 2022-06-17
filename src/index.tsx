import ReactDOM from 'react-dom/client'
import './global.scss'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Root from './pages/Root'
import Products from './pages/Products'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  </BrowserRouter>
)