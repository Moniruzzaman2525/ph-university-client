/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/feathers/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParam } from "../../../types";


export type TTableData = Pick<TAcademicSemester, 'name' | "year" | "startMonth" | 'endMonth'>

export const StudentDataTable = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined)
  const { data: semesterData, isFetching } = useGetAllSemesterQuery(params)
  const tableData = semesterData?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
    key: _id, name, startMonth, endMonth, year
  }))

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
      ],
    },
    {
      title: 'Year',
      key: 'year',
      dataIndex: 'year',
      filters: [
        {
          text: '2025',
          value: '2025',
        },
        {
          text: '2026',
          value: '2026',
        },
        {
          text: '2027',
          value: '2027',
        },
      ],
    },
    {
      title: 'Start Month',
      key: 'startMonth',
      dataIndex: 'startMonth',

    },
    {
      title: 'End Month',
      key: 'endMonth',
      dataIndex: 'endMonth',
    },
    {
      title: 'Action',
      key: 'x',
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        )
      },
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
