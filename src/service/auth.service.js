import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: `https://back.nemeson.es/`,
      withCredentials: true,
    });
  }

  login = (userData) => this.api.post("/login", userData);
  signup = (userData) => this.api.post("/signup", userData);
  logout = () => this.api.post("/logout");
  isLoggedIn = () => this.api.get("/loggedin");
  updateUser = (user_id, userData) => this.api.put(`/user/${user_id}`, userData);
  updatePassword = (userData) => this.api.put("/password", userData);
}

export default AuthService;
