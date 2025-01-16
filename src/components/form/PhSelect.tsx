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
                    <div style={{ height: "20px", marginTop: "5px" }}>
                        {error ? (
                            <small style={{ color: "red" }}>{error.message}</small>
                        ) : (
                            <small>&nbsp;</small>
                        )}
                    </div>
                </Form.Item>
            )}
        ></Controller>
    )
}
