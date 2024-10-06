import { useEffect, useRef, useState } from 'react'
import { useLazyGetTodosQuery, } from '../store/features/api.slice'
import { Alert, Table, Switch, Checkbox, Select, Input, Tooltip, Button } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

const generateColumns = (object) => {
  // console.log(Object.keys(object), 'Object.keys(object)');
  console.log(object, 'object');
  if (object) {

    const columns = Object.keys(object).map((key) => {
      // if (key === "completed") {
      //   return {
      //     title: key.toUpperCase(),
      //     dataIndex: key,
      //     key: key,
      //     render: (completed) => {
      //       // console.log(completed, record, 'completed, record');
      //       return <Switch disabled={true} value={completed} />
      //     }
      //   }
      // }
      // return {
      //   title: key.toUpperCase(),
      //   dataIndex: key,
      //   key: key,
      // }
      return {
        title: key.toUpperCase(),
        dataIndex: key,
        key: key,
        ...(key === "completed" ? {
          render: (completed) => {
            return <Switch disabled={true} value={completed} />
          }
        } : {})
      }
    });
    // console.log(columns, object);

    return columns
  } else {
    return []
  }
}
const PER_PAGE = 5;
const Todos = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [columns, setColumns] = useState([]);
  const userId = searchParams.get("userId");
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(PER_PAGE);
  // const [isCompleted, setIsCompleted] = useState();
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('all');
  const [query, setQuery] = useState('')
  const searchInputRef = useRef(null)

  // const { data, error, isLoading, isSuccess, isError, refetch } = useGetPostsQuery(userId ? `?userId=${userId}` : '')
  const [getTodos, { data, error, isLoading, isSuccess, isError }] = useLazyGetTodosQuery()

  useEffect(() => {
    getTodos(`?_page=${currentPage}&_per_page=${pageSize}${query ? `&title=${query}` : ''}${filter !== 'all' ? `&completed=${filter}` : ''}${sort !== 'all' ? `&_sort=${sort}title` : ''}${userId ? `&userId=${userId}` : ''}`)
  }, [userId, currentPage, pageSize, filter, sort, query])

  // useEffect(() => {
  //   getTodos(`?_page=${currentPage}&_per_page=${pageSize}${isCompleted !== undefined ? `&completed=${isCompleted}` : ''}${userId ? `&userId=${userId}` : ''}`)
  // }, [userId, currentPage, pageSize, isCompleted])

  useEffect(() => {
    if (data) {
      const columns = generateColumns(data?.data[0]);
      setColumns(columns)
    }
  }, [data])

  const onChange = (page) => {
    // console.log({ page });
    setCurrentPage(page);
  };

  const onShowSizeChange = (current, size) => {
    // console.log({ current, size });
    setPageSize(size);
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
  // console.log(userId, 'userId');
  // console.log(data, 'data');

  // const onCheckboxStateChange = (e) => {
  //   console.log('checked = ', e.target.checked);
  //   setIsCompleted(e.target.checked);
  // };

  // console.log(isCompleted, 'isCompleted');

  const handleSortChange = (value) => {
    // console.log(`selected ${value}`);
    setSort(value);
  };

  const handleFilterChange = (value) => {
    // console.log(`selected ${value}`);
    setFilter(value);
  };
  // console.log(filter, 'filter');
  console.log(query, 'query');

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: '1rem' }}>
        <div style={{ display: "flex", alignItems: "center", gap: '1rem' }}>
          <Input placeholder="Enter your query here to search todos!"
            style={{ width: '20rem' }}
            //  value={query} onChange={(event) => setQuery(event.target.value)} 
            ref={searchInputRef}
            onClear={() => {
              setQuery('');
              // searchInputRef?.current?.input?.valu = ""
            }}
          />
          <Tooltip title="search" placement='top' arrow>
            <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={() => {
              console.log(searchInputRef.current, 'searchInputRef.current');

              setQuery(searchInputRef.current?.input?.value)
            }} />
          </Tooltip>
        </div>

        {/* <Search placeholder="Enter your query here to search todos!" enterButton="Search" size="large" loading /> */}
        <div>
          Sort todos based on title: {" "}
          <Select
            // defaultValue="all"
            style={{
              width: 120,
            }}
            value={sort}
            onChange={handleSortChange}
            options={[
              {
                value: 'all',
                label: 'No Sort',
              },
              {
                value: '',
                label: 'Ascending',
              },
              {
                value: '-',
                label: 'Descending',
              },
            ]}
          />
          Filter todos based on completed state: {" "}
          <Select
            // defaultValue="all"
            style={{
              width: 120,
            }}
            value={filter}
            onChange={handleFilterChange}
            options={[
              {
                value: 'all',
                label: 'All',
              },
              {
                value: 'true',
                label: 'Completed',
              },
              {
                value: 'false',
                label: 'In Completed',
              },
            ]}
          />
        </div>
        {/* <Checkbox checked={isCompleted} onChange={onCheckboxStateChange}>
          Filter todos based on completed state
        </Checkbox> */}
      </div>
      <Table bordered rowKey={(record) => record.id} dataSource={data?.data} loading={isLoading} columns={columns}
        pagination={{
          total: data?.items || 0,
          current: currentPage,
          onChange: onChange,
          pageSize: pageSize,
          onShowSizeChange: onShowSizeChange,
          hideOnSinglePage: true,
          showTotal: (total) => `Total ${total} todos`
        }}
      />
    </>
  )
}

export default Todos