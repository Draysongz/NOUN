import React from 'react'
import './result.css'
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import logo from './assets/icon.webp'
import { PDFExport } from '@progress/kendo-react-pdf'


const Result = () => {
    const pdfExportComponent = React.useRef(null);

    const exportPDF = () => {
      pdfExportComponent.current.save();
    };

      const currentDate = new Date();
      const dateString = currentDate.toLocaleDateString("en-US", { day: "2-digit", month: "2-digit", year: "numeric" });
      const formattedDate = dateString.slice(0, 2) + dateString.slice(3, 5) + dateString.slice(8, 10);
console.log(formattedDate);
const hours = currentDate.getHours().toString().padStart(2, "0");
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
const twelveHourFormat = (hours % 12 || 12).toString().padStart(2, "0");
const timeString = `${twelveHourFormat}:${minutes}`;
console.log(timeString);
      
  return (
    <div className='result-cont'>
      <div className="headee">
        <center><img src={logo} alt="" className="unilogo" width='45px' height='45px' /></center>
        <PDFExport ref={pdfExportComponent}>
        <h4 className="heading">
        NATIONAL OPEN UNIVERSITY OF NIGERIA <br />
        NOU191020817 GIDIGBI Ayomide Daniel <br />
        {formattedDate} {timeString} <br />
        Exam Results for 2022/2 Session
        </h4>
        <center id='searcht'>
            <button className="pdf" onClick={exportPDF}>PDF</button>
            <span className="searche">

            
            <label htmlFor="search">Search:</label>
            <input type="text"id='search'/>
            </span>
        </center>
        <style>
            {
                `
            h4{
                color:green;
            }`
            }
        </style>
        </PDFExport>
      </div>
 </div>
  )
}

export default Result
