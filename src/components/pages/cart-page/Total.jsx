import { withRouter } from 'react-router-dom';

const Total = ({ itemCount, total, clearCart, history }) => {
  return (
    <div className='total-container text-left '>
      <div className='total p-6'>
        <h1 className="text-2xl font-semibold text-gray-900">Order Summary</h1>
        <p className="py-2 text-gray-700 text-xl">Total Items: {itemCount}</p>
        <p className="py-2 text-gray-900 font-semibold text-lg">{`Total: $${total}`}</p>
        <div className='checkout flex space-x-4 mt-4'>
          <button className='btn  text-gray-100 text-olive-orange bg-green-600' onClick={() => history.push('/checkout')}>CHECKOUT</button>
          <button className='btn bg-red-600 text-gray-100' onClick={() => clearCart()}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Total);