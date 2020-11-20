import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://school-in-cloud-lambda.herokuapp.com/",
    headers: {
      authorization: token,
    },
  });
};
