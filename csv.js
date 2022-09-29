import React, { useState, useEffect } from 'react';
 import { CSVLink } from 'react-csv';
// import { CSVLink, CSVDownload } from "react-csv";

// const csvData = [
//   ["firstname", "lastname", "email"],
//   ["Ahmed", "Tomi", "ah@smthing.co.com"],
//   ["Raed", "Labes", "rl@smthing.co.com"],
//   ["Yezzi", "Min l3b", "ymin@cocococo.com"]
// ];
// <CSVLink data={csvData}>Download me</CSVLink>;
// const ExportCSV = () => {

const { fileData, setFileData } = useState();

// json key should match the header's key

const [fileHeaders] = useState[
  {label: 'userID', key: 'id'},
  {label: 'First Name', key: 'userDetails.firstName'},
  {label: 'Last Name', key: 'userDetails.lastName'},
  {label: 'title', key: 'title'},
  {label: 'id', key: 'id'},
  {label: 'Status', key: 'status'}
]


const handleDataFetch = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  const respJSON = await response.json();
  setFileData(respJSON)
};

useEffect(()=>{
  handleDataFetch();
}, [])

return (
  <div>
    <h3>Export to CSV</h3>
    {fileData?.length &&
      <CSVLink
        headers={fileHeaders}
        data={fileData}
        filename="results.csv"
        target="_blank"
      >
        Export
      </CSVLink>
    }
  </div>
);
};

export default ExportCSV;
