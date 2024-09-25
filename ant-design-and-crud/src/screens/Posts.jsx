import React, { useEffect, useState } from 'react'
import { useGetPostsQuery } from '../store/features/api.slice'
import { Alert, Table, Button, Modal } from 'antd';
import { useSearchParams } from 'react-router-dom';

const Posts = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const [columns, setColumns] = useState([]);
    const userId = searchParams.get("userId");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, error, isLoading, isSuccess, isError, refetch } = useGetPostsQuery(userId ? `?userId=${userId}` : '')
    console.log({ data, error, isLoading, isSuccess, isError, userId });

    useEffect(() => {
        if (data) {
            const columns = Object.keys(data[0]).map((key) => {
                return {
                    title: key.toUpperCase(),
                    dataIndex: key,
                    key: key,
                }
            }
            );
            // console.log(columns);
            setColumns([...columns, {
                title: 'COMMENTS',
                key: 'comments',
                render: (value, record, index) => {
                    return <Button type="primary" size='middle' onClick={showModal}>View Comments</Button>;
                }
            },])
        }
    }, [data])


    const showModal = () => {
        setIsModalOpen(true);
    };


    const hideModal = () => {
        setIsModalOpen(false);
    };
    // if (isLoading) {
    //     return <Spin size="large" />
    // } 
    if (error) {
        return <Alert
            message={"Error"}
            description={error}
            type="error"
            closable
        />
    }
    return (
        <>
            <Table bordered rowKey={(record) => record.id} dataSource={data} loading={isLoading} columns={columns} pagination={false} />
            <Modal title="Comments" open={isModalOpen} onOk={hideModal} onCancel={hideModal}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}

export default Posts