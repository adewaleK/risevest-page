import Description from '../Description/Description'
import Image from '../Image/Image'
import goalImg from '../../images/img3.png'
import './Goals.css'

const Goals = () => {
    const title = 'Set goals and reach them';
    const body = 'You can invest towards a goal on Rise--retirement, higher education, save for your home or travel budgets. Or create a goal of your own and invest periodically to achieve them.';
    const link = 'Start investing now';
    return (
        <section className='goals-items'>
            <Description title={title} body={body} link={link} />
            <Image image={goalImg} />
        </section>
    )
}

export default Goals