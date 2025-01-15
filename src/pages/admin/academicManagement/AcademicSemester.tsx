import { Table, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/feathers/admin/academicManagement.api";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export const AcademicSemester = () => {

  const { data: semesterData } = useGetAllSemesterQuery(undefined)

  const tableData = semesterData?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
    _id, name, startMonth, endMonth, year
  }))

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
    },
    {
      title: 'Year',
      dataIndex: 'year',
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
    },
  ];

 

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <div>
      <Table<DataType>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />
    </div>
  )
}