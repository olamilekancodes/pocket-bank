import * as Yup from "yup";
import { LoginStrings } from "../../shared/constants/strings";

export const accountLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email(`${LoginStrings.email.validation1}`)
    .required(`${LoginStrings.email.validation1}`),
  password: Yup.string()
    .min(6, `${LoginStrings.password.validation1}`)
    .required(`${LoginStrings.password.validation2}`),
});
