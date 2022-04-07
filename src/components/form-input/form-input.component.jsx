import { FormInputLabel, Input, FormGroup } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </FormGroup>
  );
};

export default FormInput;
