import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
            query: () => ({
                url: '/academic-semesters',
                method: 'GET',
            }),
            transformErrorResponse: (response) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        academicSemester: builder.mutation({
            query: (data) => ({
                url: '/academic-semesters/create-academic-semester',
                method: 'POSt',
                body: data
            })
        }),
    })
})


export const { useGetAllSemesterQuery, useAcademicSemesterMutation } = academicManagementApi