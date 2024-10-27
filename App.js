import DecreaseButton from './components/DecreaseButton'
import IncreaseButton from './components/IncreaseButton'
import { useState } from 'react'
import ReseteButton from './components/ReseteButton'

const App = () => {

const [value, setValue] = useState(0)

const decreaseOne = () => {
 const newValue = value - 1
 setValue(newValue)
}

const increaseOne = () => {
  const newValue = value + 1
  setValue(newValue)
}

const resetAll = () => {
 setValue(0)
}

  return (
    <div className="counter-box">
      <h1>Počítadlo</h1>
      <h2>{value}</h2>
      <IncreaseButton increase = {increaseOne}/>
      <DecreaseButton decrease={decreaseOne}/>
      <ReseteButton reset={resetAll}/>
    </div>
  )
}

export default App
































// import DecreseButton from './components/DecreaseButton'
// import IncreseButton from './components/IncreaseButton'
// import ReseteButton from './components/ReseteButton'
// import { useState } from 'react'

// const App = () => {

//   const [value, setValue] = useState(0)

// const decreaseOne = () => {
//   const result = value - 1
//   setValue(result)
// }

// const increseOne = () => {
//   const result = value + 1
//   setValue(result)
// }

// const resettoZero = () => {
//   setValue(0)
// }


//   return <div className='container'>
//     <h4>Počítadlo</h4>
//     <h2>{value}</h2>
//     <DecreseButton xxx={decreaseOne}/>
//     <IncreseButton xxx={increseOne}/>
//     <ReseteButton xxx={resettoZero}/>
//   </div>
// }

// export default App