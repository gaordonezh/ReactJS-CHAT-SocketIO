import axios from "axios";
import { API_BASEURL } from "config/api.config";
import UserService from "config/UserService";

export const createRoom = async (data: object) => {
  const res = await axios.post(`${API_BASEURL}/room`, data, {
    headers: { Authorization: UserService.token() },
  });
  return res.data;
};
