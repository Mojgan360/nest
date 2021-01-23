import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  CheckoutPage,
  PrivateRoute,
  AuthWrapper,
} from './pages'
import { Navbar, Sidebar, Footer } from './components'
// import Alert from './components/Alert'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        {/* <Alert /> */}
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
          <PrivateRoute exact path='/checkout'>
            <CheckoutPage />
          </PrivateRoute>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
