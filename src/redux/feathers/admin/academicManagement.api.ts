
import { TResponseRedux } from "../../../types";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
            query: (args) => {

                const params = new URLSearchParams()
                if (args) {
                    args.forEach((item) => {
                        params.append(item.name, item.value)
                    });

                }

                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params
                }
            },
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