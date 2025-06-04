import'./Hero.css'
import Hero_Bunner from '../../assets/images/hero.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-left">
            <h1>welcom to fourteen general supply</h1>
            <p>We offer the best quality products in the world at affordable
            prices.</p>
            <Link to="/products"><button>Explore More</button></Link>
        </div>
        <div className="hero-right">
            <img src={Hero_Bunner} alt='Dell Inspiron 14 5406 2-in-1 Intel Core i3-11th Gen' />
        </div>
    </div>
  )
}

export default Hero