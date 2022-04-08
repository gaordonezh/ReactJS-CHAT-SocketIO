import { SESSION_USER } from "./session";
import StorageService from "./StorageService";

class UserService {
  static token() {
    const res = StorageService.get(SESSION_USER);
    return res.token;
  }
}

export default UserService;
