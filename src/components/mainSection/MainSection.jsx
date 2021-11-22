import { withRouter } from 'react-router-dom';
import donut from '../../images/donut.jpg'
import burger from '../../images/burger.jpg'
import pizza from '../../images/pizza.jpg'
import FeaturedCollection from './FeaturedCollection';
// import FeaturedCollection from './FeaturedCollection';

const MainSection = ({ history }) => {
  return (
    <div className='bg-gray-100'>
      {/* <div className='main-section-middle flex flex-1 gap-8 w-8/12  mx-auto my-8 '>
            <div className='ms-m-image h-66 w-full'>
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
                DOUGHNUT
            </button>
            </div> 
      </div> */}
      {/* photo gallery */}
      <div className='text-main bg-gray-500 py-8'>
        
        <div className="wrapper rounded-md shadow-md gap-2 w-5/6 justify-evenly flex mx-auto h-28 md:h-auto lg:h-auto xl:h-auto ">
          <div className="image w-1/2 bg-light-bg">
            <img src={donut} alt='donut' className="w-full h-full rounded-md"/>
          </div>
          <div className="text bg-gray-100 w-1/2" >
            <img src={burger} alt='donut' className="w-full h-full rounded-md"/>

          </div>
          <div className="text bg-gray-100 w-1/2" >
            <img src={donut} alt='donut' className="w-full h-full rounded-md"/>

          </div>
        </div>
        <div className="mt-2 shadow-md rounded-md gap-2 w-5/6 justify-evenly flex mx-auto h-28 md:h-auto lg:h-auto xl:h-auto">
          <div className="text bg-gray-100 w-1/4 h-20  md:h-48 lg:h-64 xl:h-64 my-auto" >
            <img src={burger} alt='donut' className="w-full h-full lg:h-full"/>

          </div>
          <div className="image bg-light-bg w-1/2">
            <img src={pizza} alt='donut' className="w-full h-full"/>

          </div>
          <div className="text bg-gray-100 w-1/4 h-20 md:h-48 lg:h-64 xl:h-64 my-auto" >
            <img src={donut} alt='donut' className="w-full h-full lg:h-full"/>

          </div>
        </div>
      </div>
      <FeaturedCollection />
    </div>
  );
}

export default withRouter(MainSection);