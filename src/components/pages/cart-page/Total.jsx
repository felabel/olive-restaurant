import { withRouter } from 'react-router-dom';

const Total = ({ itemCount, total, clearCart, history }) => {
  return (
    <div className='total-container text-left'>
      <div className='total'>
        <p>Total Items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
        <div className='checkout'>
          <button className='btn' onClick={() => history.push('/checkout')}>CHECKOUT</button>
          <button className='btn bg-red' onClick={() => clearCart()}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Total);