import { useState } from 'react'
import Enquiry from './Enquiry'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
 
    {/* <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}

    <Enquiry/>

   </>
)}

export default App
