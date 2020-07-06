import * as Yup from "yup";
import { Geo, Address, Company, NewUser } from "types/User";
import { phoneRegExp, urlRegExp } from "consts/regex";

// TODO this one is unecessarely complicated since the type of
// lat and lng is declared as string by the API. it should be
// a number and then we could use number based validation from yup
// directly...
export const geoSchema: Yup.ObjectSchema<Geo> = Yup.object()
  .shape({
    lat: Yup.string()
      .test("is valid latitude", "invalid latitude", (lat) => {
        const latAsNumber = Number(lat);
        return latAsNumber >= -90 && latAsNumber <= 90;
      })
      .required(),
    lng: Yup.string()
      .test("is valid longitude", "invalid longitude", (lng) => {
        const lngAsNumber = Number(lng);
        return lngAsNumber >= -180 && lngAsNumber <= 180;
      })
      .required(),
  })
  .required();

export const addressSchema: Yup.ObjectSchema<Address> = Yup.object()
  .shape({
    street: Yup.string().required(),
    suite: Yup.string(),
    city: Yup.string().required(),
    zipcode: Yup.string(),
    geo: geoSchema.required(),
  })
  .required();

export const companySchema: Yup.ObjectSchema<Company> = Yup.object()
  .shape({
    name: Yup.string().min(2).required(),
    catchPhrase: Yup.string().default(""),
    bs: Yup.string().default(""),
  })
  .required();

export const userSchema: Yup.ObjectSchema<NewUser> = Yup.object()
  .shape({
    name: Yup.string().min(2).required(),
    username: Yup.string().min(3).max(18).required(),
    email: Yup.string().email().required(),
    address: addressSchema.required(),
    phone: Yup.string().required(), // TODO phone validation via regex fails for demo data (?)
    website: Yup.string().matches(urlRegExp, "Email is not valid"),
    company: companySchema.required(),
  })
  .required();

export default userSchema;
