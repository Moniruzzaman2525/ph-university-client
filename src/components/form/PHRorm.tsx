import { FormProvider, useForm } from "react-hook-form"

export const PHRorm = ({ onSubmit, children }) => {

    const methods = useForm()

    return <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
}
