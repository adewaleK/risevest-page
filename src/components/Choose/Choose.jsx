import Description from '../Description/Description'
import Image from '../Image/Image'
import chooseImg from '../../images/img2.png'
import './Choose.css'

const Choose = () => {
    const title = "Choose what's best for yo";
    const body = "Unlike other platforms, Rise lets you pick between stocks, US real estate and fixed income, according to your risk appetite. That way you can spread your risk and tap into different investments all in one place.";
    const link = 'Start investing now'
    return (
        <section className='choose-items'>
            <div className="choose-img"><Image image={chooseImg} /></div>
            <Description title={title} body={body} link={link} />
        </section>
    )
}

export default Choose