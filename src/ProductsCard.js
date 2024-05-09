import './App.css';
import { FaStar } from "react-icons/fa";


const ProductCards = ({name,price,rating,votes}) =>{
    return <>
    <div className='card'>
        <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg" 
        alt='coffee'
        className='image_coffee'
        ></img>
        <div className='coffee_name'>
            <p className='white'>{name}</p>
            <p className='white price'>{price}$</p>
        </div>
        <div className='rating'>
            {/* <p className='white'></p> */}
            <FaStar color='#f5c769' className='iconn'/>
            <p className='white'>{rating}({votes} votes)</p>
        </div>
    </div>
    </>
}

export default ProductCards;