import React, { FunctionComponent } from "react";
import { Button, LinearProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, TextFieldProps } from "formik-material-ui";
import { Formik, Form, Field, FormikHelpers } from "formik";
import LocationField from "components/LocationField";
import PhoneNumberField from "components/PhoneNumberField";
import { NewUser } from "types/User";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "auto",
    width: "100%",
    maxWidth: "720px",
    padding: theme.spacing(1),
    display: "block",
    "& > *": {
      margin: theme.spacing(1, 0),
      width: "100%",
    },
  },
  sectionTitle: {
    marginTop: theme.spacing(3),
  },
}));

type userProfileFormProps = {
  onCompleted: (values: NewUser) => void;
  initialValues: NewUser;
  schema: Yup.ObjectSchema<NewUser>;
};

const UserProfileForm: FunctionComponent<userProfileFormProps> = ({
  onCompleted,
  initialValues,
  schema,
}) => {
  const classes = useStyles();
  const shrink: Pick<TextFieldProps, "InputLabelProps"> = {
    InputLabelProps: { shrink: true },
  };

  const onSubmit = (values: NewUser, { setSubmitting }: FormikHelpers<NewUser>) => {
    setSubmitting(false);
    onCompleted(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      {({ submitForm, isSubmitting, setFieldValue, errors }) => (
        <Form className={classes.container}>
          <Typography className={classes.sectionTitle} component="h5" variant="h5">
            User Data
          </Typography>
          <Field component={TextField} name="username" label="User Name" {...shrink} />
          <Field component={TextField} name="name" label="Name" {...shrink} />
          <Field component={TextField} name="email" type="email" label="Email" {...shrink} />
          <Field
            component={PhoneNumberField}
            name="phone"
            label="Phone Number"
            defaultCountry={"de"}
          />

          <Typography className={classes.sectionTitle} component="h5" variant="h5">
            Company Data
          </Typography>
          <Field component={TextField} name="company.name" label="Company Name" {...shrink} />
          <Field
            component={TextField}
            name="company.catchPhrase"
            label="Catch Phrase"
            {...shrink}
          />
          <Field component={TextField} name="company.bs" label="Business Slogan" {...shrink} />

          <Typography className={classes.sectionTitle} component="h5" variant="h5">
            Location
          </Typography>
          <Field component={LocationField} name="address" />
          <Field component={TextField} name="address.street" label="Street" {...shrink} />
          <Field component={TextField} name="address.suite" label="Suite" {...shrink} />
          <Field component={TextField} name="address.city" label="City" {...shrink} />
          <Field component={TextField} name="address.zipcode" label="Zipcode" {...shrink} />

          {isSubmitting && <LinearProgress />}

          <Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserProfileForm;
