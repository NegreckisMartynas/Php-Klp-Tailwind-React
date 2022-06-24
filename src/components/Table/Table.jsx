export default (tableData, classNames ) => {
    return <table className="border-collapse border-2 border-slate-700/50">
                {header(tableData?.headers, classNames)}
                {body(tableData?.headers, tableData?.body)} 
            </table>
}

const header = (headers, classNames)  => {
    if(headers) {
        return <thead >
                    <tr>
                        {headers.map(col =>
                            <th key={col.label} className="border-x border-y-2 border-slate-700/50 bg-slate-300/50">
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
                    {body.map((rowObject, i) => row(orderRow(rowObject, i)))}
                </tbody>
    }
}

const row = (rowData) => {
    return  <tr key={rowData} className="bg-slate-100/50 even:bg-slate-200/50 hover:bg-slate-400/50">
                {rowData.map( col => 
                    <td key={col} className="border border-slate-700/50 px-2">
                        {col}
                    </td>
                )}
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
