import axios from "axios";

export const getUserData = () => {
  const url = process.env.REACT_APP_URL || "";

  return axios.get(url).then((res) => res.data);
};
