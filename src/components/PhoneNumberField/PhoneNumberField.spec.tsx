import React from "react";
import PhoneNumberField from "./PhoneNumberField";
import { mount } from "enzyme";
import { Formik, Form, Field } from "formik";
import MuiPhoneNumber from "material-ui-phone-number";

describe("PhoneNumberField", () => {
  it("gets the value property from Formik", () => {
    const mockValidPhoneNumber = "+1 (224) 241-2412";
    const wrapper = mount(
      <Formik initialValues={{ phone: mockValidPhoneNumber }} onSubmit={() => {}}>
        <Field component={PhoneNumberField} name="phone" label="Phone Number" />
      </Formik>
    );

    expect(wrapper.find(MuiPhoneNumber).props().value).toEqual(mockValidPhoneNumber);
  });
});
