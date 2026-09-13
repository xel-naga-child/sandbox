import { useEffect, useState } from "react";

export const useCustomTable = () => {
    const [dataSource, setDataSource] = useState<any[]>([]);
    const [columns, setColumns] = useState<any[]>([])
    const [selectedRowKey, setSelectedRowKey] = useState<string>();
    const [rowClassName, setRowClassName] = useState<string>('');


    let addNewRow = () => {
        
        let newRow = {
            key:  selectedRowKey ? parseInt(selectedRowKey) + 1 : 1,
            name: 'Sofía',
            address: 'Jorge Washington 123',
        }

        let selectedRow = dataSource.find((row) => row.key === selectedRowKey);
        let selectedRowIdx = selectedRowKey ? dataSource.indexOf(selectedRow) : -1;

        setDataSource((prevDataSource) =>{
            prevDataSource.splice(selectedRowIdx + 1, 0, newRow);

            return [...prevDataSource];
        });
        
    };

    let onRow: any = (record: any, rowIndex: number) => {
        return {
            onClick: (event: React.MouseEvent) => { 
                
                setSelectedRowKey(record.key)
        }}
        
    }

useEffect(() => {


    setColumns([
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'},
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'},
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'}])


    setDataSource([
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },{
            key: '2',
            name: 'Jane Smith',
            age: 28,
            address: 'Los Angeles No. 2 Beach Street',
        }]
    )


}, [])


    return {dataSource, setDataSource, columns, setColumns, onRow, selectedRowKey, addNewRow}
}