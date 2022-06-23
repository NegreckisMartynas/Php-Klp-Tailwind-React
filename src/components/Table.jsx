export default (tableData) => {
    return <table>
                {header(tableData?.headers)}
                {body(tableData?.headers, tableData?.body)} 
            </table>
}

const header = (headers)  => {
    if(headers) {
        return <thead>
                    <tr>
                        {headers.map(col =>
                            <th>
                                {col.label}
                            </th>
                        )}
                    </tr>
                </thead>
    }
    return;
}

const body = (headers, body) => {
    const orderRow = headers ? orderByHeader(headers) : coerceToNaturalOrderOfFirst(body);
    if(body) {
        return <tbody>
                    {body.map(rowObject => row(orderRow(rowObject)))}
                </tbody>
    }
}

const row = (rowData) => {
    return  <tr>
                {rowData.map( col => <td>{col}</td>)}
            </tr>
}

const orderByHeader = (header) => {
    const map = header.map(h => h.column)
    return createMappingFunction(map);
}

const coerceToNaturalOrderOfFirst = (data) => {
    const map = data?.length ? Object.getOwnPropertyNames(data[0]) : null;
    return map ? createMappingFunction(map) : () => {}
}

const createMappingFunction = (map)  => (row) => map.map(m => row[m]);
