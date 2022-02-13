import Description from '../Description/Description'
import Image from '../Image/Image'
import investImg from '../../images/img1.png'
import './Invest.css'

const Invest = () => {
  const title = 'Invest your money in dollars';
  const body = 'By holding your investments in a stable currency,your money grows more over time and retains its value better.';
  const link = 'Start investing now'
  
  return (
    <section className='invest-items'>
       <Description title={title} body={body} link={link} />
       <Image image={investImg} />
    </section>
  )
}

export default Invest