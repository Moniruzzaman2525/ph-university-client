import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/feathers/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";


export type TTableData = Pick<TAcademicSemester, '_id' | 'name' | "year" | "startMonth" | 'endMonth'>

export const AcademicSemester = () => {

  const [params, setParams] = useState([])

  const { data: semesterData } = useGetAllSemesterQuery(params)

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
  ];



  const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log(filters, extra)
    if (extra.action === 'filter') {
      const queryParams = []

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
    <div>
      <Table<TTableData>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />
    </div>
  )
}
