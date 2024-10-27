import './ReseteButton.css'

const ReseteButton = ({reset}) => {
  return (
    <div className='btn'>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ReseteButton