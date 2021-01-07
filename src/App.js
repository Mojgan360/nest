import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  CheckoutPage,
} from './pages'
import { Navbar, Sidebar, Footer } from './components'
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/products/:id' children={<SingleProduct />}>
            <SingleProduct />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/checkout'>
            <CheckoutPage />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App
// <Home />
//   <Products />
//   <SingleProduct />
//   <About />
//   <Error />
