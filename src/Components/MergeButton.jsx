import { PDFDocument } from 'pdf-lib'
import download from 'downloadjs'
import '../Styles/MergeButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const MergeButton = (props) => {
  
  const mergeFiles = async () => {
    const baseArrayBuffer = await props.fileArray[0].arrayBuffer()
    const basePdfDoc = await PDFDocument.load(baseArrayBuffer, {ignoreEncryption:true})
    for (let i=1; i<props.fileArray.length; i++) {
      const arrayBuffer = await props.fileArray[i].arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer, {ignoreEncryption:true})
      const pages = await basePdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices())
      pages.forEach(page => basePdfDoc.addPage(page))
    }
    const pdfBytes = await basePdfDoc.save()
    download(pdfBytes, 'pdfFile', 'application/pdf')
  }

  return (
    // <button className="MergeButton" onClick={() => mergeFiles()}>Merge & Download</button>
    <FontAwesomeIcon icon={faFileDownload} className="MergeButton" onClick={() => mergeFiles()} />
  )
}

export default MergeButton