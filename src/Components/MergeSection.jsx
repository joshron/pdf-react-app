import { useState } from 'react'
import Input from './Input'
import FileName from './FileName'
import MergeButton from './MergeButton'
import '../Styles/Merge.css'

const Merge = () => {
  const [fileArray, setFileState] = useState([])
  const [fileCount, setCountState] = useState(0)

  const getInputFiles = async (e) => {
    let files = await e.target.files
    let array = fileArray
    for (let i=0; i<files.length; i++) {
      array.push(files.item(i))
    }
    setFileState(array)
    setCountState(fileArray.length)
    console.log(array)
  }

  const removeInputFiles = (e) => {
    let array = fileArray
    let index = e.target.value
    array.splice(index, 1)
    console.log(array)
    setFileState(array)
    setCountState(array.length)
  }

  let dragPrompt
  let mergeButton
  if (fileCount >= 2) {
    // dragPrompt = <p>Drag file names to rearrange</p>
    mergeButton = <MergeButton count={fileCount} fileArray={fileArray}/>
  }
  
  return (
    <div className="Merge option-container">
      <Input onChange={getInputFiles} />

      {dragPrompt}

      <div className="file-name-list">
        {fileArray.map((file, index) => (
          <FileName key={index} name={file.name} value={index} onClick={removeInputFiles} />
        ))}
      </div>

      {mergeButton}

    </div>
  )
}

export default Merge;