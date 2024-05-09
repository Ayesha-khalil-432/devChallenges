import './App.css';
import ProductCards from './ProductsCard';

function App() {
  return (
    <div className='main_wrap'>
      <div className='image_portion'>
        <img
          src='https://miro.medium.com/v2/resize:fill:1200:900/g:fp:0.82:0.47/1*njE2UVPnj-p4G-x6kYWIhw.jpeg'
          alt='cafe'
          className='image_class'
        >

        </img>
      </div>
      <div className='remaining_portion'></div>
      <div className='coffee_listing'>
        <div className='main_heading'>
          <h3 className='white our_'>Our collection</h3>
          <p className='white dataa'>café, small eating and drinking establishment, historically a coffeehouse, usually featuring a limited menu; originally these establishments served only coffee. The English term café, borrowed from the French, derives ultimately from the Turkish kahve, meaning coffee.</p>
        </div>
        <div className='button_'>
          <button className='buttons backk white'>All products</button>
          <button className='buttons transs white'>Available now</button>
        </div>
        <div className='cards'>
          <ProductCards name={'Coffee 1'} price={'10'} rating={4.7} votes={65} />
          <ProductCards name={'Coffee 1'} price={'10'} rating={4.7} votes={65} />
          <ProductCards name={'Coffee 1'} price={'10'} rating={4.7} votes={65} />
          <ProductCards name={'Coffee 1'} price={'10'} rating={4.7} votes={65} />
          <ProductCards name={'Coffee 1'} price={'10'} rating={4.7} votes={65} />
          <ProductCards name={'Coffee 1'} price={'10'} rating={4.7} votes={65} />

        </div>
      </div>
    </div>
  );
}

export default App;
