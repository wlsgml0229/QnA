import axios from 'axios';
import { token } from '@src/utils/token';

/**
 * 기본 URL 설정
 */
axios.defaults.baseURL = '43.201.115.136:8080';

/**
 * axios 응답 인터셉터 설정
 */
export const customAxios = {
  init() {
    console.log('[http][setting start]', axios.defaults.baseURL);
    axios.interceptors.response.use(
      (res) => {
        //서버 기본 응답 성공시
        return res;
      },
      async (error) => {
        token.remove();
        this.setHeader();
        this.removeHeader();
        // router.push('/').catch(() => {});
        return Promise.reject(error);
      },
    );
  },
  /**
   * 토큰관련 셋팅
   */
  setHeader() {
    axios.defaults.headers.common['Authorization'] = token.access()
      ? token.access()
      : '';
    axios.defaults.headers.post['Content-Type'] =
      'application/json;charset=UTF-8';
  },
  removeHeader() {
    delete axios.defaults.headers.common['Authorization'];
  },
  /**
   * Axios 관련 설정 / api 메소드
   */

  get(resource: any, params: any) {
    return axios.get(`${resource}`, { params });
  },
  getBlobFile(resource: any, params: any) {
    return axios.get(`${resource}`, { responseType: 'blob', params });
  },
  post(resource: any) {
    return axios.post(`${resource}`);
  },
  update(resource: any, params: any) {
    return axios.put(`${resource}`, params);
  },
  patch(resource: any, params: any) {
    return axios.patch(`${resource}`, params);
  },
  delete(resource: string, params: any) {
    return axios.delete(resource, { data: params });
  },
};

export default customAxios;
