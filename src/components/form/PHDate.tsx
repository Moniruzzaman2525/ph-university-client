import { Form, DatePicker } from "antd";
import { Controller } from "react-hook-form";
import moment from "moment";

type TPHDateForm = {
  label: string;
  name: string;
};

export const PHDate = ({ label, name }: TPHDateForm) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <DatePicker
            {...field}
            format="D-M-YYYY"
            onChange={(date) => field.onChange(date ? date.format("D-M-YYYY") : null)}
            value={field.value ? moment(field.value, "D-M-YYYY") : null}
            style={{ width: "100%" }}
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
    />
  );
};
