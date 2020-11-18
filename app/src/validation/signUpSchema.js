import * as yup from "yup";

export default yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email address"),
  name: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be three characters long"),
  password: yup.string().required("Password is required"),
  role: yup.number().oneOf([1, 2, 3], "Role is required"),
});
