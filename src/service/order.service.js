import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: `https://back.nemeson.es`,
      withCredentials: true,
    });
  }
  getOrders = () => this.api.get("/reservas.php");
  getOne = (order_id) => this.api.get(`/details/${order_id}`);
  newOrder = (orderData) => this.api.post("/new", orderData);
  editOrder = (order_id, orderData) => this.api.put(`/edit/${order_id}`, orderData);
  deleteOrder = (order_id) => this.api.delete(`/delete/${order_id}`);
}

export default AuthService;
