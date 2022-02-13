import './List.css'
const {assets} = require('./assets.js');

const List = () => {
  return (
    <section className='cards-box'>
       {assets.map(asset => (
         <div className="card-box" key={asset.id}>
          <div className="image-box">
            <img src={asset.image} alt={asset.id} />
          </div>
          <div className="top-section" style={{backgroundColor: asset.topBg}}>     
          </div>
          <div className="content">
            <h1>{asset.title}</h1>
            <p>{asset.dscription}</p>
            <p><span>Historical Returns: </span>{asset.history} <span>Risk Level:</span> {asset.risk}</p>
            <h3><a href="https://risevest.com/">{asset.link}</a></h3>      
          </div>
       </div>
        ))}
    </section>
  )
}

export default List