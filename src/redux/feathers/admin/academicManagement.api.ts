
import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
            query: () => ({
                url: '/academic-semesters',
                method: 'GET',
            }),
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
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