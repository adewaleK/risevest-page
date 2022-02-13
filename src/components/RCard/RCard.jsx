import './RCard.css'
const {cards} = require('./cards.js');

const RCard = () => {
  return (
    <section className='review-cards'>
        {
            cards.map(card => (
                <div className="card" key={card.id} className="hidee">
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
         <div className="show">
            <div className="review-text">
                <p>I don’t want to invest in separate stocks because I’m not a financial expert 
                    and I would rather trust my money in the hands of people like Rise who are 
                    skilled and knowledgeable.
                </p>
            </div>
            <div className="review-base">
                <img src="data:image/png;base64,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" alt="Lade" />
                <h3>Lade</h3>
            </div>
        </div>
    </section>
  )
}

export default RCard