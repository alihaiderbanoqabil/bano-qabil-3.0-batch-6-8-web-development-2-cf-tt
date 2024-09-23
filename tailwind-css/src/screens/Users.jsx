import React, { useEffect, useState } from 'react'
import { useGetUsersQuery } from '../store/features/apiSlice'
import { Alert, Spin, Table } from 'antd';

const Users = () => {
    const { data, isError, isSuccess, isLoading, error, refetch } = useGetUsersQuery()
    console.log({ data, isError, isSuccess, isLoading, error, refetch });
    const [columns, setColumns] = useState([])

    useEffect(() => {
        if (data) {
            const columns = Object.keys(data[0]).map(key => ({
                title: key.toUpperCase(),
                dataIndex: key,
                key: key,
            }))
            setColumns(columns)
        }
    }, [data])

    if (isLoading) {
        return <Spin size='large' />
    }
    if (error) {
        return <Alert
            message={error}
            type="error"
            closable
        />
    }

    return (
        <Table dataSource={data} columns={columns} />
    )
}

export default Users