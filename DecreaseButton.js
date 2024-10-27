import './DecreaseButton.css'

const DecreaseButton = ({decrease}) => {
  return (
    <div className="btn">
      <button onClick={decrease}>Snížit o 1</button>
    </div>
  )
}

export default DecreaseButton