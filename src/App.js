import React from 'react'
import {ToastContainer, toast} from 'react-toastify';

const App = () => {

  const handleClick = () => {
    toast.success("Hello from reactjs")
  }
  return (<>
    <ToastContainer />
    <div>App</div>
    <button onClick={handleClick} className='btn btn-warning btn-lg'>Click Me</button>
    </>)
}

export default App