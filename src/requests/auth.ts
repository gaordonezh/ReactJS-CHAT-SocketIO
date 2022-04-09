import axios from "axios";
import { API_BASEURL } from "config/api.config";
import UserService from "config/UserService";

export const signInUser = async (data: object) => {
  const res = await axios.post(`${API_BASEURL}/auth/signin`, data);
  return res.data;
};

export const signUpUser = async (data: object) => {
  const res = await axios.post(`${API_BASEURL}/auth/signup`, data);
  return res.data;
};

export const getUserInfo = async () => {
  if (UserService.token()) {
    const res = await axios.get(`${API_BASEURL}/auth/userinfo`, {
      headers: { Authorization: UserService.token() },
    });
    return res.data;
  } else return null;
};
