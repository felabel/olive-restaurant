import { withRouter } from 'react-router-dom';
import donut from '../images/donut.jpg'
import FeaturedCollection from './FeaturedCollection';

const MainSection = ({ history }) => {
  return (
    <div className='bg-gray-100'>
      <div className='main-section-middle  md:flex md:flex-1 lg:flex lg:flex-1 gap-8 w-8/12  mx-auto my-8 '>
            <div className='ms-m-image '>
              <img src={donut} alt='main section' className=""  />
            </div>
            <div className='ms-m-description'>
              <h2 className="text-xl">Designed for fashion. Crafted for sport.</h2>
              <p className="tracking-wider text-base py-4">We make products that effortlessly transition from day to night. 
                  From the board room to the fitness studio, and everywhere in between, 
                  each Nomads piece is thoughtfully created to be the perfect balance of 
                  form and function.</p>
                  <button 
                  className="btn btn-primary" id='shop-now py-8' onClick={() => history.push('/food/1')}>
                    STUDIO BAG
                  </button>
            </div> 
      </div>
      <FeaturedCollection />
    </div>
  );
}

export default withRouter(MainSection);