import { ArrowForward } from '@mui/icons-material'
import './Description.css'

const Description = ({title,body,link}) => {
  return (
    <div className='description-box'>
        <h1>{title}</h1>
        <p className='description-body'>{body}
        </p>
        <div className='description-link'>
          <button>{link}</button>
          <ArrowForward className='description-arrow'/>
        </div>
    </div>
  )
}

export default Description