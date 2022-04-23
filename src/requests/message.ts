import axios from "axios";
import { API_BASEURL } from "config/api.config";
import UserService from "config/UserService";

export const getMessagesByRoom = async (roomId: string) => {
  const res = await axios.get(`${API_BASEURL}/message/${roomId}`, {
    headers: { Authorization: UserService.token() },
  });
  return res.data;
};
