import './Download.css'
import AppleStore from '../../images/AppleStore.png'
import googlePlay from '../../images/GooglePlay.png'
import animatedscreen from '../../images/animatedscreen.png'

const Download = () => {
  return (
    <section className='download-box'>
        <div className="app-section">
            <h3>Download The Rise App</h3>
            <h1>Join our 100,000 users investing and setting long term goals!</h1>
            <p>Dollar investments that help you grow</p>
            <div className="download-btns">
                <img src={AppleStore} alt="app-store" />
                <img src={googlePlay} alt="play-store" />
            </div>
        </div>
        <div className="screen-section">
          <img src={animatedscreen} alt="animated" />
        </div>
    </section>
  )
}

export default Download