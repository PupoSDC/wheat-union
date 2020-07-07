import React, { FunctionComponent } from "react";
import MuiPhoneNumber, { MuiPhoneNumberProps } from "material-ui-phone-number";
import { FieldProps, getIn } from "formik";

export interface PhoneNumberFieldProps
  extends FieldProps,
    Omit<MuiPhoneNumberProps, "name" | "value" | "error" | "onChange"> {}

export function fieldToPhoneNumberField({
  disabled,
  field,
  form: { isSubmitting, touched, errors, setFieldValue },
  ...props
}: PhoneNumberFieldProps): MuiPhoneNumberProps {
  const fieldError = getIn(errors, field.name);
  const showError = getIn(touched, field.name) && !!fieldError;

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled ?? isSubmitting,
    variant: "outlined",
    onChange: (e) => setFieldValue("phone", e),
  };
}



const PhoneNumberField: FunctionComponent<PhoneNumberFieldProps> = ({ children, ...props }) => (
  <MuiPhoneNumber {...fieldToPhoneNumberField(props)}>{children}</MuiPhoneNumber>
);

PhoneNumberField.displayName = "FormikMaterialUIPhoneNumberField";

export default PhoneNumberField;
