import axios from '../axios';

/**
 * 登录api
 * @description 手机或邮箱登录
 */

export function login({
  mobileNumber,
  email,
  password
}: Record<string, number>) {
  const data: Record<string, number> = { password };
  if (mobileNumber) {
    data['mobileNumber'] = mobileNumber;
  }
  if (email) {
    data['email'] = email;
  }
  return axios.post('api/users/login', data);
}

/**
 * 注册api
 * @description 手机号注册
 */
export function register({ mobileNumber, password }: Record<string, number>) {
  return axios.post('api/users/register', { mobileNumber, password });
}
