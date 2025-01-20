/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParam, TStudent } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/feathers/admin/userManagement.api";


export type TTableData = Pick<TStudent, 'fullName' | "id">

export const StudentDataTable = () => {
  const [params, setParams] = useState<TQueryParam[]>([])
  // const [page, setPage] = useState(1)
  const [page, setPage] = useState(1)
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    {name: 'limit', value: 3},
    {name: 'page', value: page},
    {name: 'sort', value: 'id'},
    ...params])
  const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
    key: _id, fullName, id
  }))


  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
      showSorterTooltip: { target: 'full-header' },
    },
    {
      title: 'Roll Number',
      key: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <Space>
            <Button>Update</Button>
            <Button>Delete</Button>
            <Button>Block User</Button>
          </Space>
        )
      },
      width: '1%'
    },
  ];



  const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    console.log(filters, extra)
    if (extra.action === 'filter') {
      const queryParams: TQueryParam[] = []

      filters.name?.forEach(item => (
        queryParams.push({ name: 'name', value: item })
      ))
      filters.year?.forEach(item => (
        queryParams.push({ name: 'year', value: item })
      ))
      setParams(queryParams)
    }
  };


  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
    />
  )
}
