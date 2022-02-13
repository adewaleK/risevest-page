import './Logo.css'

const Logo = (props) => {
  return (
    <div className="logo" style={{color: props.color}}>
        <h2>rise</h2>
        <div className='bob' style={{backgroundColor: props.bg}}></div>
    </div>
  )
}

export default Logo