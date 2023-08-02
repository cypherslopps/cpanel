import { DataGrid } from "@mui/x-data-grid";

const columnsDraft = [
    {
        field: 'col1',
        headerName: "Index",
        width: 100,
        renderHeader(params) {
            return (
                <strong className="font-semibold">{params.colDef.headerName}</strong>
            )
        }
    },
    {
        field: 'col2',
        headerName: 'Category',
        width: 150
    },
    {
        field: 'col3',
        headerName: 'Services',
    },
    {
        field: 'col4',
        headerName: 'Link',
    },
    {
        field: 'col5',
        headerName: 'Status',
    },
    {
        field: 'col6',
        headerName: 'Quantity',
    },
    {
        field: 'col7',
        headerName: 'Charge',
    },
    {
        field: 'col8',
        headerName: 'Average time',
    }
]

const columns = columnsDraft.map(col => {
    return {
        ...col,
        renderHeader(params) {
            return (
                <span className="text-[.93rem] font-sans">{params.colDef.headerName}</span>
            )
        }
    }
})

const OrdersTable = ({ userRequests }) => {
    const rows = userRequests.map(request => ({
        id: request.id,
        col1: request.category,
        col2: request.services,
        col3: request.link,
        col4: request.status,
        col5: request.quantity,
        col6: request.charge,
        col7: request.average_time
    }))

    return (
        <div>
            <DataGrid 
                style={{ padding: "0 .3rem" }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
                filterMode="server"
                autoHeight
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                columns={columns}
                rows={rows}
            ></DataGrid>
        </div>
    )
}

export default OrdersTable;