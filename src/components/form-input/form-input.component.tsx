import { FormInputLabel, Input, FormGroup } from "./form-input.styles";
import { InputHTMLAttributes, FC, HtmlHTMLAttributes } from "react";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </FormGroup>
  );
};

export default FormInput;
