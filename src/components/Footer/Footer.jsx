import { ArrowForward } from '@mui/icons-material'
import Logo from '../Logo/Logo'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="section-1">
            <div className="rise links-1">
                <Logo bg="#000" color="#000" className="logo"/>
                <a href="https://risevest.com/"><p>About Us</p></a>
                <a href="https://risevest.com/"><p>Career</p></a>
                <a href="https://risevest.com/"><p>FAQs</p></a>
                <a href="https://risevest.com/"><p>About Us</p></a>
                <a href="https://risevest.com/"><p>Contact Info</p></a>
            </div>
            <div className="explore">
                <h3>Explore</h3>
                <a href="https://risevest.com/"><p>Investment Club <ArrowForward className='slant-arrow'/></p></a>
                <a href="https://risevest.com/"><p>About Blog <ArrowForward className='slant-arrow'/></p></a>

            </div>
        </div>
        <div className="section-2">
            <div className="products">
                <h3>Products</h3>
                <a href="https://risevest.com/"><p>Rise App</p></a>
            </div>
            <div className="contact">
                <h3>Contact Us</h3>
                <a href="https://risevest.com/"><p>+234 01 888 3519 <ArrowForward className='slant-arrow'/></p></a>
                <a href="https://risevest.com/"><p>+234 01 888 3519 <ArrowForward className='slant-arrow'/></p></a>
                <a href="https://risevest.com/"><p>hello@risevest.com <ArrowForward className='slant-arrow'/></p></a>
                <a href="https://risevest.com/"><p>Newsletetr <ArrowForward className='slant-arrow'/></p></a>
                <a href="https://risevest.com/"><p>Instagram <ArrowForward className='slant-arrow'/></p></a>
                <a href="https://risevest.com/"><p>Twitter <ArrowForward className='slant-arrow'/></p></a>         
            </div>
        </div>
        
    </footer>
  )
}

export default Footer