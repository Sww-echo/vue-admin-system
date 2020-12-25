import axios from "axios";

const instance = axios.create({
  baseURL: "http://rap2api.taobao.org/app/mock/273674/"
});

// 响应拦截器
instance.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default instance;
