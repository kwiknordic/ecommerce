import { Routes, Route } from "react-router-dom"
import { ownContext } from './hooks/ownContext'
import Category from "./pages/Category";
import Home from "./pages/Home.js"
import Layout from "./pages/Layout.js"
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";

export const { Provider } = ownContext;

function App() {
  return (
    <Provider value='App state'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cat/:name" element={<Category />} />
          <Route path="/product/:item" element={<Product />} />
          {/*           <Route path="/contact-us" element={<ContactUs />} */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Provider>
  )
}

export default App