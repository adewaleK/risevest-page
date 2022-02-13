import Trustee from '../../images/Trustee.png'
import western from '../../images/westernUnion.png'
import techstars from '../../images/teckstars.png'
import venture from '../../images/venture.png'
import './Partners.css'

const Partners = () => {
  return (
    <section className="icons-box">
        <div className="trustees">
            <img src={Trustee} alt="trustees" />
        </div>
        <div className="trustees">
            <img src={western} alt="trustees" />
        </div>
        <div className="trustees">
            <img src={techstars} alt="trustees" />
        </div>
        <div className="trustees">
            <img src={venture} alt="trustees" />
        </div>
    </section>
  )
}

export default Partners