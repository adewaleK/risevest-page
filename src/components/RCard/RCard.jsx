import './RCard.css'
const {cards} = require('./cards.js');

const RCard = () => {
  return (
    <section className='review-cards'>
        {
            cards.map(card => (
                <div className="card" key={card.id}>
                    <div className="review-text">
                        <p>{card.desc}</p>
                    </div>
                    <div className="review-base">
                        <img src={card.image} alt={card.image} />
                        <h3>{card.name}</h3>
                    </div>
                </div>
            ))
        }
    </section>
  )
}

export default RCard