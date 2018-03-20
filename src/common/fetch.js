import axios from 'axios'
import {backUrl} from "./config"
import {getUserInfo} from "./userinfo"

const service = axios.create({
  baseURL: backUrl,
  timeout: 1000
});

service.interceptors.request.use(config => {
  let userInfo = getUserInfo();
  if (userInfo !== null && userInfo.token.length > 0) {
    config.headers.token = userInfo.token;
  }
  return config;
}, error => {

});

export default service
