import './IncreaseButton.css'

const IncreaseButton = ({increase}) => {

   return (
    <div className='btn'>
        <button onClick={increase}>Zvýšit o 1</button>
    </div>
  )
}

export default IncreaseButton