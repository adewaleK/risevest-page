import './Image.css'

const Image = ({image}) => {
  return (
    <>
      <img src={image}  alt="investImg" className="i-image" />
    </>
  )
}

export default Image