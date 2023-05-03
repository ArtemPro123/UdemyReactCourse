

//This is very reusable
function Table ({data, config, keyFn}) {

  //nested map to make sure we have td's equal to the number of objects
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return <td className="p-3" key={column.label}>{column.render(rowData)}</td>
    });
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  const renderedConfig = config.map((column) => {
    return <th key={column.label}>{column.label}</th>
  });

  return (
  <table className="table-auto border-spacing-2">
    <thead>
      <tr className="border-b-2">
        {renderedConfig}
      </tr>
    </thead>
    <tbody>
      {renderedRows}
    </tbody>
  </table>
  )
}


//div should not be inside table tags
export default Table;