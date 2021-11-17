import { Switch, Route } from 'react-router-dom';

import HomePage from './components/Homepage';
import NotFound from './components/NotFound';
import CartPage from './components/pages/cart-page/CartPage';
import Shop from './components/pages/shop/Shop';
import SingleProduct from './components/singleproduct/SingleProduct';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <Route path='/cart' component={CartPage} /> 
        <Route path="*" component={NotFound} />

      </Switch>
    </div>
    
  );
}

export default App;
