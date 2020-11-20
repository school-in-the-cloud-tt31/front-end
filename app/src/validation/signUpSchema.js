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
  role: yup
    .string()
    .oneOf(["student", "volunteer", "admin"], "Role is required"),
  country: yup.string().required("Country is required"),
});
