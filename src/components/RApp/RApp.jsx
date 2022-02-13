import './RApp.css'

const RApp = () => {
  return (
    <section className='app-content'>
        <div className="app-img">
            <img src="https://risevest.com/_next/static/images/build-wealth-phone-aeef38e0842f062323879d6e0b2e2fc4.png" alt="app" />
        </div>
        <div className="app-text">
            <h3>The Rise App</h3>
            <h1>Save for your <span>future</span></h1>
            <p>With Rise, you achieve your financial goals faster. 
                Save for school, your home, 
                vacations, your children’s future and more.
            </p>
            <button type='submit'>Start Saving</button>
        </div>
    </section>
  )
}

export default RApp