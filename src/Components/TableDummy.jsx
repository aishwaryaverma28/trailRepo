import React from 'react';
import TableWithPagination from './TableWithPagination';

const TableDummy = () => {
  // Example data
  const tableData = [ 
    { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
  { column1: 'Row 1 Data', column2: 'Row 1 Data' },
  { column1: 'Row 2 Data', column2: 'Row 2 Data' },
    { column1: 'Row 1 Data', column2: 'Row 1 Data' },
    { column1: 'Row 2 Data', column2: 'Row 2 Data' },
    { column1: 'Row 1 Data', column2: 'Row 1 Data' },
    { column1: 'Row 2 Data', column2: 'Row 2 Data' },
     { column1: 'Row 1 Data', column2: 'Row 1 Data' },
    { column1: 'Row 2 Data', column2: 'Row 2 Data' },

    // Add more rows here
  ];

  return (
    <div>
      <h1>Table with Pagination</h1>
      <TableWithPagination data={tableData} rowsPerPage={5} />
    </div>
  );
};

export default TableDummy;
