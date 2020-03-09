import axios from "axios";

const instance = axios.create({
  // baseURL: 'https://react-my-burger.firebaseio.com/'
  baseURL: "https://react-my-burger-14666.firebaseio.com/"
});

export default instance;
