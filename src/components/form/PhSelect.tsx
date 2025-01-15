import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectForm = {
    label: string;
    name: string;
    options: {
        value: string;
        label: string;
        disabled?: boolean
    }[]
}

export const PhSelect = ({ label, name, options }: TPHSelectForm) => {


    return (
        <Controller
            name={name}
            render={({ field, fieldState: { error } }) => (
                <Form.Item label={label}>
                    <Select
                        {...field}
                        style={{ width: '100%' }}
                        options={options}
                        size="large"
                    />
                    {error && <small style={{color: 'red'}}>{error.message}</small>}
                </Form.Item>
            )}
        ></Controller>
    )
}
