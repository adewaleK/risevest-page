import './Intro.css'
import AppleStore from '../../images/AppleStore.png'
import googlePlay from '../../images/GooglePlay.png'
import animatedscreen from '../../images/animatedscreen.png'

const Intro = ({show}) => {
  return (
    <section className='intro-container'>
        <div className="sub-menu" style={{display: show ? 'block' : 'none'}}>
            <h3><a href="https://risevest.com/">Stocks</a></h3>
            <h3><a href="https://risevest.com/">Real Estate</a></h3>
            <h3><a href="https://risevest.com/">Fixed Income</a></h3>
            <h3><a href="https://risevest.com/">Build Wealth</a></h3>
        </div>
        <div className='main-section'>
            <div className='brief'>
                <h1>Dollar investments that help you grow</h1>
                <p>We put your money in high quality assets that help you build 
                    wealth and achieve your financial goals.
                </p>
                <div className="buttons">
                    <img src={AppleStore} alt="App store" />
                    <img src= {googlePlay} alt="App store" />
                </div>
            </div>     
            <div className='screen-logo'>
                <img src={animatedscreen} alt="screen" className='screen'/>
            </div>
        </div>
    </section>
  )
}

export default Intro