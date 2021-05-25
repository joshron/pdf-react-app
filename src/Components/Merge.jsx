import { useState } from 'react'
import Input from './Input'
import '../Styles/Merge.css'

const Merge = () => {
  const [fileArray, setState] = useState([])

  const getInputFiles = (e) => {
    let files = e.target.files
    let array = fileArray
    for (let i=0; i<files.length; i++) {
      array.push(files.item(i))
    }
    console.log(array)
    setState(array)
  }

  let pdfNames
  for (i=0; i<fileArray.length; i++) {
    
  }

  return (
    <div className="Merge option-container">
      <Input onChange={getInputFiles} />
    </div>
  )
}

export default Merge;