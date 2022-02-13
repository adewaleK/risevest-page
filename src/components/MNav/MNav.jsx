import { ArrowDownward } from '@mui/icons-material'
import './MNav.css'

const MNav = () => {
  return (
    <section className='mnav-box'>
        <div className="home space">    
            <a href="https://risevest.com/"><p>Home</p></a>
        </div>
        <div className="products space">
            <div className="text">
                <a href="https://risevest.com/"><p>Products </p></a>
                <ArrowDownward />
            </div>
        </div>
        <div className="home space">    
            <a href="https://risevest.com/"><p>Investment Club</p></a>
        </div>
        <div className="home space">    
            <a href="https://risevest.com/"><p>About Us</p></a>
        </div>
        <div className="home space">    
            <a href="https://risevest.com/"><p>FAQs</p></a>
        </div>
        <div className="home space">    
            <a href="https://risevest.com/"><p>Blog</p></a>
        </div>
    </section>
  )
}

export default MNav