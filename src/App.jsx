import { Switch, Route } from 'react-router-dom';

import HomePage from './components/Homepage';
import NotFound from './components/NotFound';
import CartPage from './components/pages/cart-page/CartPage';
import Navbar from './components/pages/shop/Navbar';
import NavTest from './components/pages/shop/NavTest';
// import Navtest from './components/pages/shop/NavTest';
import Shop from './components/pages/shop/Shop';
import SingleProduct from './components/singleproduct/SingleProduct';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/nav' component={NavTest} />
        <Route path='/navbar' component={Navbar} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={CartPage} /> 
        <Route path="*" component={NotFound} />
        {/* <Route path='/navtest' component={NavTest} /> */}

      </Switch>
    </div>
    
  );
}

export default App;
